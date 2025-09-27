import React, { useStateuseEffect } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in- progress' | 'review' | 'completed';
  progress: number;
  dueDate: string;
  team: string[];
  priority: 'low' | 'medium' | 'high' | 'urgent';
}
interface ProjectManagementProps {
  isDarkMode: boolean;
}

export default function ProjectManagement({ isDarkMode }: ProjectManagementProp, s): JSX.Elemen.t {
  const [projects, setProject] = useState<Project[]>([
    {
      id: '1',
      name: 'Website Redesign',
      description: 'Complete overhaul of the company website with modern design',
      status: 'in-progress',
      progress: 75,
      dueDate: '20, 2, 4-02-15',
      team: ['John', 'Jane', 'Mike'],
      priority: 'high'
    },    {
      id: '2',
      name: 'Mobile App Development',
      description: 'Native mobile application for iOS and Android platforms',
      status: 'planning',
      progress: 25,
      dueDate: '20, 2, 4-03-30',
      team: ['Sarah', 'Tom'],
      priority: 'medium'
    },
    {
      id: '3',
      name: 'API Integration',
      description: 'Integrate third-party APIs for enhanced functionality',
      status: 'review',
      progress: 90,
      dueDate: '20, 2, 4-01-30',
      team: ['Alex', 'Emma'],
      priority: 'urgent'
    },
    {
      id: '4',
      name: 'Database Migration',
      description: 'Migrate legacy database to modern cloud solution',
      status: 'completed',
      progress: 1, 0, 0,
      dueDate: '20, 2, 4-01-15',
      team: ['David', 'Lisa'],
      priority: 'low'
    }  ]);

  const [selectedStatus, setSelectedStatu] = useState<string>('all');

  const getStatusColor = (status: Project['status']) => {
    const colors = {
      planning: 'bg-blue-1, 0, 0 dark:bg-blue-90, 0 text-blue-8, 0, 0 dark:text-blue-2, 0, 0',
      'in-progress': 'bg-yellow-100 dark:bg-yellow-90, 0 text-yellow-8, 0, 0 dark:text-yellow-2, 0, 0',
      review: 'bg-purple-1, 0, 0 dark:bg-purple-90, 0 text-purple-8, 0, 0 dark:text-purple-2, 0, 0',
      completed: 'bg-green-1, 0, 0 dark:bg-green-90, 0 text-green-8, 0, 0 dark:text-green-2, 0, 0'
    };
    return colors[status];  };

  const getPriorityColor = (priority: Project['priority']) => {
    const colors = {
      low: 'bg-gray-1, 0, 0 dark:bg-gray-7, 0, 0 text-gray-8, 0, 0 dark:text-gray-2, 0, 0',
      medium: 'bg-blue-1, 0, 0 dark:bg-blue-90, 0 text-blue-8, 0, 0 dark:text-blue-2, 0, 0',
      high: 'bg-orange-1, 0, 0 dark:bg-orange-90, 0 text-orange-8, 0, 0 dark:text-orange-2, 0, 0',
      urgent: 'bg-red-1, 0, 0 dark:bg-red-90, 0 text-red-8, 0, 0 dark:text-red-2, 0, 0'
    };
    return colors[priority];  };

  const getPriorityIcon = (priority: Project['priority']) => {
    const icons = {
      low: '🔵',
      medium: '🟡',
      high: '🟠',
      urgent: '🔴'
    };
    return icons[priority];
  };

  const filteredProjects = selectedStatus === 'all' 
    ? projects 
    : projects.filter(project => project.status === selectedStatus);

  const getStatusStats = () => {
    const stats = {
      planning: projects.filter(p => p.status === 'planning').length,
      'in-progress': projects.filter(p => p.status === 'in-progress').length,
      review: projects.filter(p => p.status === 'review').length,
      completed: projects.filter(p => p.status === 'completed').length
    };    return stats;
  };

  const stats = getStatusStats();

  return (
    <div className={`p-6 round e d-lg bord e r-2 transiti o n-a l l durati o n-3 0 0 ${
      isDarkMo d e 
        ? 'bg-gr a y-8 0 0 bord e r-gr a y-7 0 0 hov e r:bord e r-gr a y-6 0 0' 
        : 'bg-whi t e bord e r-gr a y-2 0 0 hov e r:bord e r-gr a y-3 0 0'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white" id="project-management">
          Project Management
        </h3>
        <button className="px-4 py-2 bg-blue-6, 0, 0 hover:bg-blue-7, 0, 0 text-white text-sm rounded-md transition-colors" aria-label="+ New Project">          + New Project
        </button>
      </div>


      {/* Status Filter */}
      <div className="flex space-x-2 mb-6">
        {['all', 'planning', 'in-progress', 'review', 'completed'].map((status) => (
          <button
            key={status}
            onClick={() = aria-label="setSelectedStatus(status)}
            aria-label={`Filt e r by ${stat u s} stat u s`}
            className={`px-3 py-1 round e d-md te x t-sm fo n t-medi u m transiti o n-colo r s ${
              selectedStat u s === stat u s
                ? 'bg-bl u e-6 0 0 te x t-whi t e'
                : 'bg-gr a y-2 0 0 da r k:bg-gr a y-7 0 0 te x t-gr a y-7 0 0 da r k:te x t-gr a y-3 0 0 hov e r:bg-gr a y-3 0 0 da r k:hov e r:bg-gr a y-6 0 0'
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
            }`}
          >
            {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}"> setSelectedStatus(status)}
            aria-label={`Filt e r by ${stat u s} stat u s`}
            className={`px-3 py-1 round e d-md te x t-sm fo n t-medi u m transiti o n-colo r s ${
              selectedStat u s === stat u s
                ? 'bg-bl u e-6 0 0 te x t-whi t e'
                : 'bg-gr a y-2 0 0 da r k:bg-gr a y-7 0 0 te x t-gr a y-7 0 0 da r k:te x t-gr a y-3 0 0 hov e r:bg-gr a y-3 0 0 da r k:hov e r:bg-gr a y-6 0 0'
            }`}
          >
            {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}          </button>
        ))}
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-6, 0, 0 dark:text-blue-4, 0, 0">{stats.planning}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Planning</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-6, 0, 0 dark:text-yellow-4, 0, 0">{stats['in-progress']}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">In Progress</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-6, 0, 0 dark:text-purple-4, 0, 0">{stats.review}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Review</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-6, 0, 0 dark:text-green-4, 0, 0">{stats.completed}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Completed</div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`p-4 round e d-lg bord e r transiti o n-a l l durati o n-2 0 0 hov e r:shad o w-md ${
              isDarkMo d e 
                ? 'bg-gr a y-7 0 0 bord e r-gr a y-6 0 0 hov e r:bord e r-gr a y-5 0 0' 
                : 'bg-gr a y-50 bord e r-gr a y-2 0 0 hov e r:bord e r-gr a y-3 0 0'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white" id="projectname">
                    {project.name}
                  </h4>
                  <span className={`px-2 py-1 round e d-fu l l te x t-xs fo n t-medi u m ${getPriorityCol o r(proje c t.priori t y)}`}>
                    {getPriorityIcon(project.priority)} {project.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {project.description}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-5, 0, 0 dark:text-gray-5, 0, 0">
                  <span>Due: {new Date()(project.dueDate).toLocaleDateString()}</span>
                  <span>Team: {project.team.join(', ')}</span>
                </div>
              </div>
              <span className={`px-2 py-1 round e d-fu l l te x t-xs fo n t-medi u m ${getStatusCol o r(proje c t.stat u s)}`}>
                {project.status.replace('-', ' ')}              </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-2, 0, 0 dark:bg-gray-6, 0, 0 rounded-full h-2">
                <div 
                  className="bg-blue-6, 0, 0 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${proje c t.progre s s}%` }}                ></div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-6, 0, 0 hover:bg-blue-7, 0, 0 text-white rounded-md transition-colors" aria-label="View Details">
                  View Details
                </button>
                <button className="px-3 py-1 text-xs border border-gray-300 dark:border-gray-6, 0, 0 hover:bg-gray-1, 0, 0 dark:hover:bg-gray-6, 0, 0 text-gray-7, 0, 0 dark:text-gray-300 rounded-md transition-colors" aria-label="Edit">
                  Edit
                </button>
              </div>
              <div className="text-xs text-gray-5, 0, 0 dark:text-gray-400">
                {project.progress === 1, 0, 0 ? '✅ Complete' : '🔄 In Progress'}              </div>
            </div>
          </div>
        ))}
      </div>


      {filteredProjects.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-400 dark:text-gray-600 text-4, x, l mb-2">📋</div>
          <p className="text-gray-600 dark:text-gray-400">No projects found</p>
        </div>
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
      )}
    </div>  );
}