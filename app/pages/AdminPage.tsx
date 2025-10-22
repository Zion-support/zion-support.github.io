import React from 'react'
import DataCleanupManager from '../../src/components/DataCleanupManager'
const AdminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Admin Dashboard</h1>
          <p className="text-gray-300 text-xl">Data Management and System Administration</p>
        </div>
        <div className="max-w-6xl mx-auto">
          <DataCleanupManager showAdvanced={true} />
        </div>
      </div>
    </div>
  )
}
export default AdminPage