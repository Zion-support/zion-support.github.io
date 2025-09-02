import React, { useState, useEffect } from 'react';
import {
  Users,
  UserPlus,
  UserMinus,
  Edit,
  Trash2,
  Eye,
  Lock,
  Unlock,
  Mail,
  Phone,
  Calendar,
  MapPin,
  CreditCard,
  Activity,
  Star,
  Award,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  MoreVertical,
  UserCheck,
  UserX,
  Crown,
  Zap
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../components/ui/NotificationSystem';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator' | 'premium';
  status: 'active' | 'inactive' | 'suspended' | 'pending';
  joinDate: string;
  lastLogin: string;
  location?: string;
  orders: number;
  totalSpent: number;
  rating: number;
  reviews: number;
  subscription?: {
    plan: string;
    status: 'active' | 'cancelled' | 'expired';
    expiresAt: string;
  };
  preferences: {
    notifications: boolean;
    marketing: boolean;
    darkMode: boolean;
  };
  tags: string[];
  notes?: string;
}

interface UserManagementProps {
  onUserSelect?: (user: User) => void;
  onUserEdit?: (user: User) => void;
  onUserDelete?: (userId: string) => void;
}

export const UserManagement: React.FC<UserManagementProps> = ({
  onUserSelect,
  onUserEdit,
  onUserDelete
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const { theme, config } = useTheme();
  const { addNotification } = useNotifications();

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUsers: User[] = [
        {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+1 (555) 123-4567',
          role: 'premium',
          status: 'active',
          joinDate: '2023-06-15T09:00:00Z',
          lastLogin: '2024-01-15T10:30:00Z',
          location: 'New York, NY',
          orders: 12,
          totalSpent: 2340,
          rating: 4.8,
          reviews: 23,
          subscription: {
            plan: 'Premium',
            status: 'active',
            expiresAt: '2024-12-15T09:00:00Z'
          },
          preferences: {
            notifications: true,
            marketing: false,
            darkMode: true
          },
          tags: ['VIP', 'High Value', 'Tech Savvy'],
          notes: 'Excellent customer, always pays on time'
        },
        {
          id: '2',
          name: 'Jane Smith',
          email: 'jane@example.com',
          phone: '+1 (555) 987-6543',
          role: 'admin',
          status: 'active',
          joinDate: '2023-03-20T14:30:00Z',
          lastLogin: '2024-01-15T08:45:00Z',
          location: 'San Francisco, CA',
          orders: 8,
          totalSpent: 1890,
          rating: 4.9,
          reviews: 15,
          preferences: {
            notifications: true,
            marketing: true,
            darkMode: false
          },
          tags: ['Admin', 'Early Adopter', 'Beta Tester']
        },
        {
          id: '3',
          name: 'Bob Johnson',
          email: 'bob@example.com',
          role: 'user',
          status: 'inactive',
          joinDate: '2023-08-10T11:15:00Z',
          lastLogin: '2024-01-10T16:20:00Z',
          location: 'Chicago, IL',
          orders: 3,
          totalSpent: 450,
          rating: 4.2,
          reviews: 5,
          preferences: {
            notifications: false,
            marketing: false,
            darkMode: true
          },
          tags: ['New User', 'Price Sensitive']
        },
        {
          id: '4',
          name: 'Alice Brown',
          email: 'alice@example.com',
          phone: '+1 (555) 456-7890',
          role: 'moderator',
          status: 'active',
          joinDate: '2023-05-05T16:45:00Z',
          lastLogin: '2024-01-14T12:15:00Z',
          location: 'Austin, TX',
          orders: 15,
          totalSpent: 3200,
          rating: 4.7,
          reviews: 31,
          subscription: {
            plan: 'Enterprise',
            status: 'active',
            expiresAt: '2024-11-05T16:45:00Z'
          },
          preferences: {
            notifications: true,
            marketing: true,
            darkMode: true
          },
          tags: ['Moderator', 'Enterprise', 'High Volume']
        },
        {
          id: '5',
          name: 'Charlie Wilson',
          email: 'charlie@example.com',
          role: 'user',
          status: 'suspended',
          joinDate: '2023-09-12T13:20:00Z',
          lastLogin: '2024-01-08T09:30:00Z',
          location: 'Miami, FL',
          orders: 2,
          totalSpent: 180,
          rating: 3.5,
          reviews: 2,
          preferences: {
            notifications: true,
            marketing: false,
            darkMode: false
          },
          tags: ['Suspended', 'Payment Issues'],
          notes: 'Account suspended due to payment disputes'
        }
      ];

      setUsers(mockUsers);
      setFilteredUsers(mockUsers);
      setIsLoading(false);
    };

    loadUsers();
  }, []);

  // Filter and sort users
  useEffect(() => {
    let filtered = users;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.location?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by role
    if (filterRole !== 'all') {
      filtered = filtered.filter(user => user.role === filterRole);
    }

    // Filter by status
    if (filterStatus !== 'all') {
      filtered = filtered.filter(user => user.status === filterStatus);
    }

    // Sort users
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;

      switch (sortBy) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'joinDate':
          aValue = new Date(a.joinDate);
          bValue = new Date(b.joinDate);
          break;
        case 'lastLogin':
          aValue = new Date(a.lastLogin);
          bValue = new Date(b.lastLogin);
          break;
        case 'orders':
          aValue = a.orders;
          bValue = b.orders;
          break;
        case 'totalSpent':
          aValue = a.totalSpent;
          bValue = b.totalSpent;
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        default:
          aValue = a.name;
          bValue = b.name;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredUsers(filtered);
  }, [users, searchTerm, filterRole, filterStatus, sortBy, sortOrder]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900';
      case 'inactive':
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
      case 'suspended':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900';
      case 'moderator':
        return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900';
      case 'premium':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900';
      case 'user':
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <Crown className="w-4 h-4" />;
      case 'moderator':
        return <Shield className="w-4 h-4" />;
      case 'premium':
        return <Star className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  const handleUserAction = (userId: string, action: string) => {
    addNotification({
      type: 'success',
      title: 'User Action',
      message: `User ${action} successfully`
    });
  };

  const handleBulkAction = (action: string) => {
    addNotification({
      type: 'info',
      title: 'Bulk Action',
      message: `${action} applied to ${selectedUsers.length} users`
    });
    setSelectedUsers([]);
  };

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const selectAllUsers = () => {
    setSelectedUsers(
      selectedUsers.length === filteredUsers.length
        ? []
        : filteredUsers.map(user => user.id)
    );
  };

  const renderUserCard = (user: User) => (
    <div
      key={user.id}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-200 hover:shadow-md ${
        selectedUsers.includes(user.id) ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
              user.status === 'active' ? 'bg-green-500' : 
              user.status === 'inactive' ? 'bg-gray-400' : 
              user.status === 'suspended' ? 'bg-red-500' : 'bg-yellow-500'
            }`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{user.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
            {user.phone && (
              <p className="text-xs text-gray-500 dark:text-gray-500">{user.phone}</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
            {getRoleIcon(user.role)}
            <span className="ml-1">{user.role}</span>
          </span>
          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.status)}`}>
            {user.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Orders</p>
          <p className="text-sm font-medium text-gray-900 dark:text-white">{user.orders}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total Spent</p>
          <p className="text-sm font-medium text-gray-900 dark:text-white">{formatCurrency(user.totalSpent)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Rating</p>
          <div className="flex items-center">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">{user.rating}</span>
            <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">({user.reviews})</span>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Last Login</p>
          <p className="text-sm font-medium text-gray-900 dark:text-white">{formatDate(user.lastLogin)}</p>
        </div>
      </div>

      {user.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {user.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onUserSelect?.(user)}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => onUserEdit?.(user)}
            className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            <Edit className="w-4 h-4" />
          </button>
          {user.status === 'active' ? (
            <button
              onClick={() => handleUserAction(user.id, 'suspended')}
              className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              <Lock className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => handleUserAction(user.id, 'activated')}
              className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
            >
              <Unlock className="w-4 h-4" />
            </button>
          )}
        </div>
        <input
          type="checkbox"
          checked={selectedUsers.includes(user.id)}
          onChange={() => toggleUserSelection(user.id)}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      </div>
    </div>
  );

  const renderUserRow = (user: User) => (
    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          type="checkbox"
          checked={selectedUsers.includes(user.id)}
          onChange={() => toggleUserSelection(user.id)}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
          {getRoleIcon(user.role)}
          <span className="ml-1">{user.role}</span>
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.status)}`}>
          {user.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        {user.orders}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        {formatCurrency(user.totalSpent)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {formatDate(user.lastLogin)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onUserSelect?.(user)}
            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => onUserEdit?.(user)}
            className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Manage {filteredUsers.length} users
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {viewMode === 'grid' ? <Users className="w-5 h-5" /> : <Users className="w-5 h-5" />}
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <UserPlus className="w-4 h-4" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="premium">Premium</option>
              <option value="user">User</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
              <option value="pending">Pending</option>
            </select>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="name">Name</option>
                  <option value="joinDate">Join Date</option>
                  <option value="lastLogin">Last Login</option>
                  <option value="orders">Orders</option>
                  <option value="totalSpent">Total Spent</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort Order
                </label>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <p className="text-blue-800 dark:text-blue-200">
              {selectedUsers.length} user{selectedUsers.length !== 1 ? 's' : ''} selected
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleBulkAction('activated')}
                className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 flex items-center space-x-1"
              >
                <UserCheck className="w-4 h-4" />
                <span>Activate</span>
              </button>
              <button
                onClick={() => handleBulkAction('suspended')}
                className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 flex items-center space-x-1"
              >
                <UserX className="w-4 h-4" />
                <span>Suspend</span>
              </button>
              <button
                onClick={() => handleBulkAction('exported')}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center space-x-1"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map(renderUserCard)}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                      onChange={selectAllUsers}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Total Spent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Last Login
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredUsers.map(renderUserRow)}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No users found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search terms or filters
          </p>
        </div>
      )}
    </div>
  );
};

export default UserManagement;