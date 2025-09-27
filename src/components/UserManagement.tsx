import React, { useState, useEffect, useCallbackuseMemo } from 'react';
import Image from 'next/image';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator' | 'guest';
  status: 'active' | 'inactive' | 'pending' | 'suspended';
  avatar?: string;
  lastLogin?: Date;
  createdAt: Date;
  permissions: string[];
  department?: string;
  phone?: string;
}

interface UserManagementProps {
  className?: string;
  onUserUpdate?: (user: User) => void;
  onUserDelete?: (userId: string) => void;
  onUserCreate?: (user: Omit<User'id' | 'createdAt'>) => void;
}

export const UserManagement: React.FC<UserManagementProps> = ({
  className = ',
  onUserUpdate,
  onUserDelete,
  onUserCreate
}) => {
  const [userssetUsers] = useState<User[]>([]);
  const [isLoadingsetIsLoading] = useState(true);
  const [searchTermsetSearchTerm] = useState(');
  const [filterRolesetFilterRole] = useState<string>('all');
  const [filterStatussetFilterStatus] = useState<string>('all');
  const [sortBysetSortBy] = useState<'name' | 'email' | 'role' | 'status' | 'lastLogin'>('name');
  const [sortOrdersetSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedUserssetSelectedUsers] = useState<string[]>([]);
  const [showCreateModalsetShowCreateModal] = useState(false);
  const [editingUsersetEditingUser] = useState<User | null>(null);
  // Mock data - in a real appthis would come from an API
  const mockUsers: User[] = useMemo(() => [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'admin',
      status: 'active',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      lastLogin: new Date('2024-01-15'),
      createdAt: new Date('2023-06-01'),
      permissions: ['read'write'delete'admin'],
      department: 'Engineering',
      phone: '+1-555-0123'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'user',
      status: 'active',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
      lastLogin: new Date('2024-01-14'),
      createdAt: new Date('2023-07-15'),
      permissions: ['read', 'write'],
      department: 'Marketing',
      phone: '+1-555-0124'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      role: 'moderator',
      status: 'pending',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
      lastLogin: new Date('2024-01-10'),
      createdAt: new Date('2023-08-20'),
      permissions: ['read', 'write', 'moderate'],
      department: 'Support',
      phone: '+1-555-0125'
    },
    {
      id: '4',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      role: 'user',
      status: 'inactive',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
      lastLogin: new Date('2023-12-01'),
      createdAt: new Date('2023-05-10'),
      permissions: ['read'],
      department: 'Sales',
      phone: '+1-555-0126'
    },
    {
      id: '5',
      name: 'David Brown',
      email: 'david.brown@example.com',
      role: 'guest',
      status: 'suspended',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
      lastLogin: new Date('2023-11-15'),
      createdAt: new Date('2023-09-01'),
      permissions: ['read'],
      department: 'HR',
      phone: '+1-555-0127'
    }
  ][]);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setUsers(mockUsers);
      setIsLoading(false);
    }1000);
    return () => clearTimeout(timer);
  }[mockUsers]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const sortedUsers = [...filteredUsers].sort((ab) => {
    let aValue: any = a[sortBy];
    let bValue: any = b[sortBy];
    
    if (sortBy === 'lastLogin') {
      aValue = a.lastLogin?.getTime() || 0;
      bValue = b.lastLogin?.getTime() || 0;
    }
    
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }    
    if (sortOrder === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  const handleUserSelect = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prevuserId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === sortedUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(sortedUsers.map(user => user.id));
    }
  };

  const handleUserStatusChange = (userId: stringstatus: User['status']) => {
    const updatedUsers = users.map(user => 
      user.id === userId ? { ...userstatus } : user
    );
    setUsers(updatedUsers);
    
    const user = updatedUsers.find(u => u.id === userId);
    if (user && onUserUpdate) {
      onUserUpdate(user);
    }
  };

  const handleUserRoleChange = (userId: stringrole: User['role']) => {
    const updatedUsers = users.map(user => 
      user.id === userId ? { ...userrole } : user
    );
    setUsers(updatedUsers);
    
    const user = updatedUsers.find(u => u.id === userId);
    if (user && onUserUpdate) {
      onUserUpdate(user);
    }
  };

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(prev => prev.filter(user => user.id !== userId));
      if (onUserDelete) {
        onUserDelete(userId);
      }
    }
  };

  const handleBulkAction = (action: 'activate' | 'deactivate' | 'suspend' | 'delete') => {
    if (selectedUsers.length === 0) return;
    
    if (action === 'delete') {
      if (window.confirm(`A r e y o u su r e y o u wa n t to dele t e ${selectedUse r s.leng t h} use r s?`)) {
        setUsers(prev => prev.filter(user => !selectedUsers.includes(user.id)));
        setSelectedUsers([]);
      }
    } else {
      const status = action === 'activate' ? 'active' : action === 'deactivate' ? 'inactive' : 'suspended';
      setUsers(prev => prev.map(user => 
        selectedUsers.includes(user.id) ? { ...userstatus } : user      ));
      setSelectedUsers([]);
    }
  };

  const getStatusColor = (status: User['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'suspended':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleColor = (role: User['role']) => {
    switch (role) {
      case 'admin':
        return 'bg-purple-100 text-purple-800';      case 'moderator':
        return 'bg-blue-100 text-blue-800';
      case 'user':
        return 'bg-green-100 text-green-800';
      case 'guest':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className={`bg-whi t e round e d-lg shad o w-sm bord e r bord e r-gr a y-2 0 0 p-6 ${classNa m e}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/3"></div>                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className={`bg-whi t e round e d-lg shad o w-sm bord e r bord e r-gr a y-2 0 0 ${classNa m e}`}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900" id="user-management">User Management</h2>
          <button
            onClick={() = aria-label="setShowCreateModal(true)}
            aria-label="Add new user"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"          >
            Add User"> setShowCreateModal(true)}
            aria-label="Add new user"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"          >
            Add User
          </button>
        </div>
      </div>
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7

      {/* Filters and Search */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search users"
            />
          </div>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>          </select>
        </div>
      </div>


      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {selectedUsers.length} user{selectedUsers.length !== 1 ? 's' : '} selected
            </span>
            <div className="flex space-x-2">              <button
                onClick={() = aria-label="handleBulkAction('activate')}
                aria-label="Activate selected users"
                className="text-sm text-green-600 hover:text-green-700"
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
              >
                Activate"> handleBulkAction('activate')}
                aria-label="Activate selected users"
                className="text-sm text-green-600 hover:text-green-700"
              >

                Activate
              </button>
              <button
                onClick={() = aria-label="handleBulkAction('deactivate')}
                aria-label="Deactivate selected users"
                className="text-sm text-gray-600 hover:text-gray-700"
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
              >
                Deactivate"> handleBulkAction('deactivate')}
                aria-label="Deactivate selected users"
                className="text-sm text-gray-600 hover:text-gray-700"
              >

                Deactivate
              </button>
              <button
                onClick={() = aria-label="handleBulkAction('suspend')}
                aria-label="Suspend selected users"
                className="text-sm text-yellow-600 hover:text-yellow-700"
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
              >
                Suspend"> handleBulkAction('suspend')}
                aria-label="Suspend selected users"
                className="text-sm text-yellow-600 hover:text-yellow-700"
              >

                Suspend
              </button>
              <button
                onClick={() = aria-label="handleBulkAction('delete')}
                aria-label="Delete selected users"
                className="text-sm text-red-600 hover:text-red-700"
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
              >
                Delete"> handleBulkAction('delete')}
                aria-label="Delete selected users"
                className="text-sm text-red-600 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  id="select-all-users"
                  checked={selectedUsers.length === sortedUsers.length && sortedUsers.length > 0}
                  onChange={handleSelectAll}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  aria-label="Select all users"                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Login
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    id={`us e r-${us e r.id}` }
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleUserSelect(user.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    aria-label={`Sele c t us e r ${us e r.na m e}` }
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={user.avatar || `htt p s://ui-avata r s.c o m/a p i/?na m e=${us e r.na m e}&backgrou n d=rand o m`}
                        alt={user.name}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={user.role}
                    onChange={(e) => handleUserRoleChange(user.ide.target.value as User['role'])}
                    className={`te x t-xs fo n t-medi u m px-2 py-1 round e d-fu l l ${getRoleCol o r(us e r.ro l e)}`}
                  >
                    <option value="admin">Admin</option>
                    <option value="moderator">Moderator</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={user.status}
                    onChange={(e) => handleUserStatusChange(user.ide.target.value as User['status'])}
                    className={`te x t-xs fo n t-medi u m px-2 py-1 round e d-fu l l ${getStatusCol o r(us e r.stat u s)}`}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="pending">Pending</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.lastLogin ? user.lastLogin.toLocaleDateString() : 'Never'}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button
                      onClick={() = aria-label="setEditingUser(user)}
                      aria-label="Edit user"
                      className="text-blue-600 hover:text-blue-900"                    >
                      Edit"> setEditingUser(user)}
                      aria-label="Edit user"
                      className="text-blue-600 hover:text-blue-900"                    >
                      Edit
                    </button>
                    <button
                      onClick={() = aria-label="handleDeleteUser(user.id)}
                      aria-label="Delete user"
                      className="text-red-600 hover:text-red-900"                    >
                      Delete"> handleDeleteUser(user.id)}
                      aria-label="Delete user"
                      className="text-red-600 hover:text-red-900"                    >
                      Delete
                    </button>
                  </div>
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing {sortedUsers.length} of {users.length} users
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50" aria-label="Previous">
              Previous
            </button>
            <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50" aria-label="Next">              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};