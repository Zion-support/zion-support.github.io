import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
  permission,
    s: string[];
  department?: string;
  phone?: string;}

interface UserManagementProps {
  className?: string;
  onUserUpdate?: (user: User) => void;
  onUserDelete?: (userId: string) => void;
  onUserCreate?: (use,
    r: Omit<User, 'id' | 'createdAt'>) => void;}

export const UserManagement: React.FC<UserManagementProps> = ({
  className = '',
  onUserUpdate,
  onUserDelete,
  onUserCreate}) => {;
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'email' | 'role' | 'status' | 'lastLogin'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  // Mock data - in a real app, this would come from an API
  const mockUsers: User[] = useMemo(() => [
    {
      i,
    d: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'admin',
      status: 'active',
      avatar: 'http,
    s://images.unsplash.com/photo-1472099 6 4 5 7 8 5-565 8 abf 4 ff 4 e?w = 32&h=32&fit=crop&crop=face',
      lastLogin: new Date('20 2 4-01-15'),
      createdAt: new Date('20 2 3-06-01'),
      permissions: ['read', 'write', 'delete', 'admin'],
      department: 'Engineering',
      phone: '+1-5 5 5-01 2 3'    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'user',
      status: 'active',
      avatar: 'http,
    s://images.unsplash.com/photo-1494790 1 0 8 7 5 5-2616b 6 1 2 b7 8 6?w = 32&h=32&fit=crop&crop=face',
      lastLogin: new Date('20 2 4-01-14'),
      createdAt: new Date('20 2 3-07-15'),
      permissions: ['read', 'write'],
      department: 'Marketing',
      phone: '+1-5 5 5-01 2 4'    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      role: 'moderator',
      status: 'pending',
      avatar: 'http,
    s://images.unsplash.com/photo-1507003 2 1 1 1 6 9-0a1dd7 2 2 8 f 2 d?w = 32&h=32&fit=crop&crop=face',
      lastLogin: new Date('20 2 4-01-10'),
      createdAt: new Date('20 2 3-08-20'),
      permissions: ['read', 'write', 'moderate'],
      department: 'Support',
      phone: '+1-5 5 5-01 2 5'    },
    {
      id: '4',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      role: 'user',
      status: 'inactive',
      avatar: 'http,
    s://images.unsplash.com/photo-1438761 6 8 1 0 3 3-646 1 ffad 8 d 8 0?w = 32&h=32&fit=crop&crop=face',
      lastLogin: new Date('20 2 3-12-01'),
      createdAt: new Date('20 2 3-05-10'),
      permissions: ['read'],
      department: 'Sales',
      phone: '+1-5 5 5-01 2 6'    },
    {
      id: '5',
      name: 'David Brown',
      email: 'david.brown@example.com',
      role: 'guest',
      status: 'suspended',
      avatar: 'http,
    s://images.unsplash.com/photo-1500648 7 6 7 7 9 1-00dcc 9 9 4 a4 3 e?w = 32&h=32&fit=crop&crop=face',
      lastLogin: new Date('20 2 3-11-15'),
      createdAt: new Date('20 2 3-09-01'),
      permissions: ['read'],
      department: 'HR',
      phone: '+1-5 5 5-01 2 7'    };
  ], []);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {;
      setUsers(mockUsers);
      setIsLoading(false);    }, 10 0 0);

    return () => clearTimeout(timer);
  }, [mockUsers]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    
    return matchesSearch && matchesRole && matchesStatus;  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {;
    let aValue: any = a[sortBy];
    let bValu,
    e: any = b[sortBy];
    
    if (sortBy = == 'lastLogin') {;
      aValue = a.lastLogin?.getTime() || 0;
      bValue = b.lastLogin?.getTime() || 0;    }
    
    if (typeof aValue = == 'string') {;
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();    }
    
    if (sortOrder = == 'asc') {;
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;    }
  });

  const handleUserSelect = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId];
    );  };

  const handleSelectAll = () => {
    if (selectedUsers.length === sortedUsers.length) {;
      setSelectedUsers([]);    } else {
      setSelectedUsers(sortedUsers.map(user => user.id));    }
  };

  const handleUserStatusChange = (userId: string, status: User['status']) => {
    const updatedUsers = users.map(user =>       user.id === userId ? { ...user, status } : user;
    );
    setUsers(updatedUsers);
    
    const user = updatedUsers.find(u => u.id === userId);
    if (user && onUserUpdate) {
      onUserUpdate(user);    }
  };

  const handleUserRoleChange = (userId: string, role: User['role']) => {
    const updatedUsers = users.map(user =>       user.id === userId ? { ...user, role } : user;
    );
    setUsers(updatedUsers);
    
    const user = updatedUsers.find(u => u.id === userId);
    if (user && onUserUpdate) {
      onUserUpdate(user);    }
  };

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {;
      setUsers(prev => prev.filter(user => user.id !== userId));
      if (onUserDelete) {
        onUserDelete(userId);      }
    }
  };

  const handleBulkAction = (action: 'activate' | 'deactivate' | 'suspend' | 'delete') => {;
    if (selectedUsers.length === 0) return;
    
    if (action = == 'delete') {      if (window.confirm(`Are you sure you want to delete ${selectedUsers.length} users?`)) {;
        setUsers(prev => prev.filter(user => !selectedUsers.includes(user.id)));
        setSelectedUsers([]);      }
    } else {
      const status = action === 'activate' ? 'active' : action === 'deactivate' ? 'inactive' : 'suspended';
      setUsers(prev = > prev.map(user =>         selectedUsers.includes(user.id) ? { ...user, status } : user;
      ));
      setSelectedUsers([]);
    }
  };

  const getStatusColor = (status: User['status']) => {
    switch (status) {
      case 'active':;
        return 'bg-green-10 0 text-green-8 0 0';
      case 'inactive':
        return 'bg-gray-1 0 0 text-gray-8 0 0';
      case 'pending':
        return 'bg-yellow-10 0 text-yellow-8 0 0';
      case 'suspended':
        return 'bg-red-10 0 text-red-8 0 0';
      defaul,
    t:
        return 'bg-gray-1 0 0 text-gray-8 0 0';    }
  };

  const getRoleColor = (role: User['role']) => {
    switch (role) {
      case 'admin':;
        return 'bg-purple-10 0 text-purple-8 0 0';
      case 'moderator':
        return 'bg-blue-10 0 text-blue-8 0 0';
      case 'user':
        return 'bg-green-10 0 text-green-8 0 0';
      case 'guest':
        return 'bg-gray-1 0 0 text-gray-8 0 0';
      defaul,
    t:
        return 'bg-gray-1 0 0 text-gray-8 0 0';    }
  };

  if (isLoading) {
    return (      <div className = {`bg-white rounded-lg shadow-sm border border-gray-20 0 p-6 ${className}`}
        <div className="animate-pulse">          <div className=h-6bg-gray-30 0 rounded w-1/4mb-4""></div>          <div className=space-y-3"">
            {[...Array(5)].map((_, i) => (              <div key = {i} className=flex items-center space-x-4"">                <div className=h-1 0 w-1 0 bg-gray-30 0 rounded-full""></div>                <div className=flex-1space-y-2"">                  <div className=h-4bg-gray-30 0 rounded w-1/4""></div>                  <div className=h-3bg-gray-30 0 rounded w-1/3""></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>;
    );
  }

  return (
    <div className = {`bg-white rounded-lg shadow-sm border border-gray-2 0 0 ${className}`}
      {/* Header */}      <div className=px-6py-4border-b border-gray-2 0 0"">        <div className=flex items-center justify-between"">          <h 2 className=text-lg font-semibold text-gray-9 0 0"" id="user-management">User Management</h2>
          <button
            onClick={() => setShowCreateModal(true)}            aria-label=Add new user""            className=bg-blue-60 0 text-white px-4 py-2rounded-md hover:bg-blue-70 0 transition-colors""
          >
            Add User
          </button>
        </div>
      </div>

      {/* Filters and Search */}      <div className=px-6py-4border-b border-gray-2 0 0"">        <div className=flex flex-col sm:flex-row gap-4"">          <div className=flex-1"">
            <input              type=text""              placeholder=Search users...""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}              className=w-full px-3py-2border border-gray-30 0 rounded-md focus: outline-none focus:ring-2focu,
    s:ring-blue-5 0 0""              aria-label = Search users""
            />
          </div>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}            className=px-3py-2border border-gray-30 0 rounded-md focus: outline-none focus:ring-2focu,
    s:ring-blue-5 0 0""
          >            <option value = all"">All Roles</option>            <option value=admin"">Admin</option>            <option value=moderator"">Moderator</option>            <option value=user"">User</option>            <option value=guest"">Guest</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}            className=px-3py-2border border-gray-30 0 rounded-md focus: outline-none focus:ring-2focu,
    s:ring-blue-5 0 0""
          >            <option value=all"">All Status</option>            <option value=active"">Active</option>            <option value=inactive"">Inactive</option>            <option value=pending"">Pending</option>            <option value=suspended"">Suspended</option>
          </select>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (        <div className=px-6py-3bg-gray-5 0 border-b border-gray-2 0 0"">          <div className=flex items-center space-x-4"">            <span className=text-sm text-gray-6 0 0"">              {selectedUsers.length} user{selectedUsers.length !== 1 ? 's' : ''} selected
            </span>            <div className=flex space-x-2"">
              <button
                onClick={() => handleBulkAction('activate')}                aria-label=Activate selected users""                className=text-sm text-green-60 0 hover:text-green-7 0 0""
              >
                Activate
              </button>
              <button
                onClick={() => handleBulkAction('deactivate')}                aria-label=Deactivate selected users""                className=text-sm text-gray-60 0 hover:text-gray-7 0 0""
              >
                Deactivate
              </button>
              <button
                onClick={() => handleBulkAction('suspend')}                aria-label=Suspend selected users""                className=text-sm text-yellow-60 0 hover:text-yellow-7 0 0""
              >
                Suspend
              </button>
              <button
                onClick={() => handleBulkAction('delete')}                aria-label=Delete selected users""                className=text-sm text-red-60 0 hover:text-red-7 0 0""
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Table */}      <div className=overflow-x-auto"">        <table className=min-w-full divide-y divide-gray-2 0 0"">          <thead className=bg-gray-50"">
            <tr>              <th className=px-6py-3text-left"">
                <input                  type=checkbox""                  id=select-all-users""
                  checked={selectedUsers.length === sortedUsers.length && sortedUsers.length > 0}
                  onChange={handleSelectAll}                  className=h-4w-4text-blue-60 0 focus:ring-blue-50 0 border-gray-30 0 rounded""                  aria-label=Select all users""
                />
              </th>              <th className=px-6py-3text-left text-xs font-medium text-gray-50 0 uppercase tracking-wider"">
                User
              </th>              <th className=px-6py-3text-left text-xs font-medium text-gray-50 0 uppercase tracking-wider"">
                Role
              </th>              <th className=px-6py-3text-left text-xs font-medium text-gray-50 0 uppercase tracking-wider"">
                Status
              </th>              <th className=px-6py-3text-left text-xs font-medium text-gray-50 0 uppercase tracking-wider"">
                Last Login
              </th>              <th className=px-6py-3text-left text-xs font-medium text-gray-50 0 uppercase tracking-wider"">
                Actions
              </th>
            </tr>
          </thead>          <tbody className=bg-white divide-y divide-gray-2 0 0"">
            {sortedUsers.map((user) => (              <tr key={user.id} className=hover:bg-gray-50"">                <td className=px-6py-4whitespace-nowrap"">
                  <input                    type=checkbox""
                    id={`user-${user.id}`}
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleUserSelect(user.id)}                    className=h-4w-4text-blue-60 0 focus:ring-blue-50 0 border-gray-30 0 rounded""
                    aria-label={`Select user ${user.name}`}
                  />
                </td>                <td className=px-6py-4whitespace-nowrap"">                  <div className=flex items-center"">                    <div className=flex-shrink-0h-1 0 w-10"">
                      <Image                        className=h-1 0 w-1 0 rounded-full""
                        src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=random`}
                        alt={user.name}
                        width={40}
                        height={40}
                      />
                    </div>                    <div className=ml-4"">                      <div className=text-sm font-medium text-gray-9 0 0"">{user.name}</div>                      <div className=text-sm text-gray-5 0 0"">{user.email}</div>
                    </div>
                  </div>
                </td>                <td className=px-6py-4whitespace-nowrap"">
                  <select
                    value={user.role}
                    onChange={(e) => handleUserRoleChange(user.id, e.target.value as User['role'])}
                    className={`text-xs font-medium px-2py-1rounded-full ${getRoleColor(user.role)}`}
                  >                    <option value=admin"">Admin</option>                    <option value=moderator"">Moderator</option>                    <option value=user"">User</option>                    <option value=guest"">Guest</option>
                  </select>
                </td>                <td className=px-6py-4whitespace-nowrap"">
                  <select
                    value={user.status}
                    onChange={(e) => handleUserStatusChange(user.id, e.target.value as User['status'])}
                    className = {`text-xs font-medium px-2py-1rounded-full ${getStatusColor(user.status)}`}
                  >                    <option value=active"">Active</option>                    <option value=inactive"">Inactive</option>                    <option value=pending"">Pending</option>                    <option value=suspended"">Suspended</option>
                  </select>
                </td>                <td className=px-6py-4whitespace-nowrap text-sm text-gray-5 0 0"">
                  {user.lastLogin ? user.lastLogin.toLocaleDateString() : 'Never'}
                </td>                <td className=px-6py-4whitespace-nowrap text-sm font-medium"">                  <div className=flex space-x-2"">
                    <button
                      onClick={() => setEditingUser(user)}
                      aria-label={`Edit user ${user.name}`}                      className=text-blue-60 0 hover:text-blue-9 0 0""
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      aria-label={`Delete user ${user.name}`}                      className=text-red-60 0 hover:text-red-9 0 0""
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}      <div className=px-6py-4border-t border-gray-2 0 0"">        <div className=flex items-center justify-between"">          <div className=text-sm text-gray-7 0 0"">
            Showing {sortedUsers.length} of {users.length} users
          </div>          <div className=flex space-x-2"">            <button className=px-3py-1text-sm border border-gray-30 0 rounded-md hover: bg-gray-50"" aria-label="Previous">
              Previous
            </button>            <button className=px-3py-1text-sm border border-gray-30 0 rounded-md hove,
    r:bg-gray-50"" aria-label="Next">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>;
  );
};