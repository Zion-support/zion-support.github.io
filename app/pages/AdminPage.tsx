import React from 'react'

const AdminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Users</h2>
          <p className="text-gray-300">Manage user accounts and permissions</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Analytics</h2>
          <p className="text-gray-300">View site analytics and performance</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Settings</h2>
          <p className="text-gray-300">Configure site settings</p>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
