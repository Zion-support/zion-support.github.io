import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence , Calendar,
  Clock,
  Play,
  Pause,
  Edit,
  Trash2,
  Plus,
  Save,
  X,
  AlertCircle,
  CheckCircle,
  Target,
  BarChart3,
  Settings;
 } from "framer-motion";
interface ScheduledAd {
  id: string;
  title: string;
  description: string;
  adId: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  daysOfWeek: number[];
  timezone: string;
  status: 'scheduled' | 'running' | 'paused' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  budget: number;
  targetAudience: string;
  createdAt: string;
  updatedAt: string;
}
interface AdSchedulerProps {
  className?: string;
}
const AdScheduler: React.FC<AdSchedulerProps> = ({ className = '' }) => {
  const [scheduledAds, setScheduledAds] = useState</AdSchedulerProps><ScheduledAd[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState</ScheduledAd><ScheduledAd | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [filter, setFilter] = useState<'all' | 'scheduled' | 'running' | 'paused' | 'completed'>('all');
  // Form state;
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    adId: '',
    startDate: '',
    endDate: '',
    startTime: '09:00',
    endTime: '17:00',
    daysOfWeek: [] as number[],
    timezone: 'UTC',
    priority: 'medium' as 'low' | 'medium' | 'high',
    budget: 0,
    targetAudience: ''
  });
  // Mock data;
  useEffect(() => {
    const mockSchedules: ScheduledAd[] = [
      {
        id: '1',
        title: 'Morning AI Campaign',
        description: 'Promote AI solutions during business hours',
        adId: 'ad-1',
        startDate: '2024-01-15',
        endDate: '2024-02-15',
        startTime: '09:00',
        endTime: '17:00',
        daysOfWeek: [1, 2, 3, 4, 5], // Monday to Friday;
        timezone: 'UTC',
        status: 'running',
        priority: 'high',
        budget: 5000,
        targetAudience: 'Tech Professionals',
        createdAt: '2024-01-10T00:00:00Z',
        updatedAt: '2024-01-15T10:30:00Z'
      },
      {
        id: '2',
        title: 'Weekend Edge Computing',
        description: 'Edge computing solutions for developers',
        adId: 'ad-2',
        startDate: '2024-01-20',
        endDate: '2024-03-20',
        startTime: '10:00',
        endTime: '18:00',
        daysOfWeek: [6, 0], // Saturday and Sunday;
        timezone: 'UTC',
        status: 'scheduled',
        priority: 'medium',
        budget: 3000,
        targetAudience: 'Developers',
        createdAt: '2024-01-18T00:00:00Z',
        updatedAt: '2024-01-18T14:20:00Z'
      }
    ];
    setScheduledAds(mockSchedules);
  }, []);
  const filteredSchedules = scheduledAds.filter(schedule => {
    const matchesFilter = filter === 'all' || schedule.status === filter;
    return matchesFilter;
  });
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-500';
      case 'scheduled': return 'bg-blue-500';
      case 'paused': return 'bg-yellow-500';
      case 'completed': return 'bg-gray-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };
  const getDaysOfWeekNames = (days: number[]) => {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days.map(day => dayNames[day]).join(', ');
  };
  const handleCreate = () => {
    setIsCreating(true);
    setFormData({
      title: '',
      description: '',
      adId: '',
      startDate: '',
      endDate: '',
      startTime: '09:00',
      endTime: '17:00',
      daysOfWeek: [],
      timezone: 'UTC',
      priority: 'medium',
      budget: 0,
      targetAudience: ''
    });
  };
  const handleEdit = (schedule: ScheduledAd) => {
    setSelectedSchedule(schedule);
    setFormData({
      title: schedule.title,
      description: schedule.description,
      adId: schedule.adId,
      startDate: schedule.startDate,
      endDate: schedule.endDate,
      startTime: schedule.startTime,
      endTime: schedule.endTime,
      daysOfWeek: schedule.daysOfWeek,
      timezone: schedule.timezone,
      priority: schedule.priority,
      budget: schedule.budget,
      targetAudience: schedule.targetAudience;
    });
    setIsEditing(true);
  };
  const handleSave = () => {
    if (isCreating) {
      const newSchedule: ScheduledAd = {
        id: Date.now().toString(),
        ...formData,
        status: 'scheduled',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setScheduledAds([...scheduledAds, newSchedule]);
    } else if (isEditing && selectedSchedule) {
      const updatedSchedules = scheduledAds.map(schedule =>
        schedule.id === selectedSchedule.id;
          ? { ...schedule, ...formData, updatedAt: new Date().toISOString() }
          : schedule;
      );
      setScheduledAds(updatedSchedules);
    }
    setIsCreating(false);
    setIsEditing(false);
    setSelectedSchedule(null);
  };
  const handleCancel = () => {
    setIsCreating(false);
    setIsEditing(false);
    setSelectedSchedule(null);
  };
  const handleStatusChange = (id: string, newStatus: string) => {
    const updatedSchedules = scheduledAds.map(schedule =>
      schedule.id === id;
        ? { ...schedule, status: newStatus as any, updatedAt: new Date().toISOString() }
        : schedule;
    );
    setScheduledAds(updatedSchedules);
  };
  const handleDelete = (id: string) => {
    setScheduledAds(scheduledAds.filter(schedule => schedule.id !== id));
  };
  const toggleDayOfWeek = (day: number) => {
    setFormData(prev => ({
      ...prev,
      daysOfWeek: prev.daysOfWeek.includes(day)
        ? prev.daysOfWeek.filter(d => d !== day)
        : [...prev.daysOfWeek, day]
    }));
  };
  return (
    </ScheduledAd><div className={`ad-scheduler ${className}`}>
      {/* Header */}
      </div><div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6" /><div className="flex items-center justify-between mb-6" /><div /><h1 className="text-3xl font-bold text-gray-900">Ad Scheduler</h1>
            <p className="text-gray-600 mt-1">Schedule and manage your ad campaigns</p>
          </div>
          <div className="flex items-center gap-3" /><div className="flex items-center gap-2" /><button;
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                </button><BarChart3 className="w-4 h-4 inline mr-1" />
                List;
              </button>
              <button;
                onClick={() => setViewMode('calendar')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'calendar' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                </button><Calendar className="w-4 h-4 inline mr-1" />
                Calendar;
              </button>
            </div>
            <button;
              onClick={handleCreate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
             /><Plus className="w-5 h-5" />
              Schedule Ad;
            </button>
          </div>
        </div>
        {/* Filters */}
        <div className="flex items-center gap-4" /><select;
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            </select><option value="all">All Schedules</option>
            <option value="scheduled">Scheduled</option>
            <option value="running">Running</option>
            <option value="paused">Paused</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      {/* Schedules List */}
      <div className="space-y-4" /><AnimatePresence>
          {filteredSchedules.map((schedule) => (
            </AnimatePresence><motion.div;
              key={schedule.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
             /><div className="flex items-start justify-between" /><div className="flex-1" /><div className="flex items-center gap-3 mb-3" /><h3 className="text-lg font-semibold text-gray-900">{schedule.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(schedule.status)}`}>
                      {schedule.status}</span>
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(schedule.priority)}`}>
                      {schedule.priority} priority</span>
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{schedule.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm" /><div /><span className="text-gray-500">Schedule:</span>
                      <p className="font-medium">
                        {new Date(schedule.startDate).toLocaleDateString()} - {new Date(schedule.endDate).toLocaleDateString()}</p>
                      </p>
                    </div>
                    <div /><span className="text-gray-500">Time:</span>
                      <p className="font-medium">
                        {schedule.startTime} - {schedule.endTime} ({schedule.timezone})</p>
                      </p>
                    </div>
                    <div /><span className="text-gray-500">Days:</span>
                      <p className="font-medium">{getDaysOfWeekNames(schedule.daysOfWeek)}</p>
                    </div>
                    <div /><span className="text-gray-500">Budget:</span>
                      <p className="font-medium">${schedule.budget.toLocaleString()}</p>
                    </div>
                    <div /><span className="text-gray-500">Target:</span>
                      <p className="font-medium">{schedule.targetAudience}</p>
                    </div>
                    <div /><span className="text-gray-500">Ad ID:</span>
                      <p className="font-medium">{schedule.adId}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  {schedule.status === 'running' ? (
                    </div><button;
                      onClick={() => handleStatusChange(schedule.id, 'paused')}
                      className="p-2 text-yellow-600 hover:bg-yellow-100 rounded-lg transition-colors"
                      title="Pause"
                    >
                      </button><Pause className="w-5 h-5" />
                    </button>
                  ) : schedule.status === 'paused' ? (
                    <button;
                      onClick={() => handleStatusChange(schedule.id, 'running')}
                      className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                      title="Resume"
                    >
                      </button><Play className="w-5 h-5" />
                    </button>
                  ) : null}
                  <button;
                    onClick={() => handleEdit(schedule)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                    title="Edit"
                  >
                    </button><Edit className="w-5 h-5" />
                  </button>
                  <button;
                    onClick={() => handleDelete(schedule.id)}
                    className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                    title="Delete"
                  >
                    </button><Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* Empty State */}
      {filteredSchedules.length === 0 && (
        <div className="text-center py-12" /><Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No scheduled ads</h3>
          <p className="text-gray-500 mb-6">
            {filter === 'all' 
              ? 'Get started by scheduling your first ad campaign'
              : 'No ads match the current filter'
            }</p>
          </p>
          {filter === 'all' && (
            <button;
              onClick={handleCreate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Schedule Your First Ad</button>
            </button>
          )}
        </div>
      )}
      {/* Create/Edit Modal */}
      <AnimatePresence>
        {(isCreating || isEditing) && (
          </AnimatePresence><motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
           /><motion.div;
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
             /><div className="p-6" /><div className="flex items-center justify-between mb-6" /><h2 className="text-xl font-semibold text-gray-900">
                    {isCreating ? 'Schedule New Ad' : 'Edit Schedule'}</h2>
                  </h2>
                  <button;
                    onClick={handleCancel}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                   /><X className="w-5 h-5" />
                  </button>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
                  </form><div className="grid grid-cols-1 md:grid-cols-2 gap-4" /><div /><label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                      <input;
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required;
                      />
                    </div>
                    <div /><label className="block text-sm font-medium text-gray-700 mb-2">Ad ID</label>
                      <input;
                        type="text"
                        value={formData.adId}
                        onChange={(e) => setFormData(prev => ({ ...prev, adId: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required;
                      />
                    </div>
                  </div>
                  <div /><label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea;
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" /><div /><label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                      <input;
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required;
                      />
                    </div>
                    <div /><label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                      <input;
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required;
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" /><div /><label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                      <input;
                        type="time"
                        value={formData.startTime}
                        onChange={(e) => setFormData(prev => ({ ...prev, startTime: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required;
                      />
                    </div>
                    <div /><label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                      <input;
                        type="time"
                        value={formData.endTime}
                        onChange={(e) => setFormData(prev => ({ ...prev, endTime: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required;
                      />
                    </div>
                  </div>
                  <div /><label className="block text-sm font-medium text-gray-700 mb-2">Days of Week</label>
                    <div className="flex gap-2">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                        </div><button;
                          key={day}
                          type="button"
                          onClick={() => toggleDayOfWeek(index)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            formData.daysOfWeek.includes(index)
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {day}</button>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4" /><div /><label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                      <select;
                        value={formData.priority}
                        onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value as any }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        </select><option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                    <div /><label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                      <input;
                        type="number"
                        value={formData.budget}
                        onChange={(e) => setFormData(prev => ({ ...prev, budget: Number(e.target.value) }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        min="0"
                      />
                    </div>
                    <div /><label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                      <select;
                        value={formData.timezone}
                        onChange={(e) => setFormData(prev => ({ ...prev, timezone: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        </select><option value="UTC">UTC</option>
                        <option value="EST">EST</option>
                        <option value="PST">PST</option>
                        <option value="CET">CET</option>
                      </select>
                    </div>
                  </div>
                  <div /><label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                    <input;
                      type="text"
                      value={formData.targetAudience}
                      onChange={(e) => setFormData(prev => ({ ...prev, targetAudience: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200" /><button;
                      type="button"
                      onClick={handleCancel}
                      className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      Cancel</button>
                    </button>
                    <button;
                      type="submit"
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                     /><Save className="w-4 h-4" />
                      {isCreating ? 'Schedule Ad' : 'Save Changes'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default AdScheduler;