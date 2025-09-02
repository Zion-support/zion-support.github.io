import React, { useState, useEffect } from 'react';
import {
  TestTube,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Download,
  Upload,
  Settings,
  BarChart3,
  Activity,
  Bug,
  Shield,
  Zap,
  Database,
  Globe,
  Monitor,
  Smartphone,
  Tablet,
  Eye,
  EyeOff,
  Filter,
  Search,
  RefreshCw,
  TrendingUp,
  Users,
  Code,
  FileText,
  Target,
  Award,
  Star
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../components/ui/NotificationSystem';

interface TestSuite {
  id: string;
  name: string;
  description: string;
  status: 'passed' | 'failed' | 'running' | 'pending';
  duration: number;
  lastRun: string;
  passRate: number;
  totalTests: number;
  passedTests: number;
  failedTests: number;
  skippedTests: number;
  category: 'unit' | 'integration' | 'e2e' | 'performance' | 'security';
  environment: 'development' | 'staging' | 'production';
  tags: string[];
}

interface TestResult {
  id: string;
  testName: string;
  suite: string;
  status: 'passed' | 'failed' | 'skipped';
  duration: number;
  error?: string;
  stackTrace?: string;
  timestamp: string;
  browser?: string;
  device?: string;
  screenshot?: string;
}

interface TestCoverage {
  statements: number;
  branches: number;
  functions: number;
  lines: number;
  files: number;
}

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

export const TestingDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [testSuites, setTestSuites] = useState<TestSuite[]>([]);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [coverage, setCoverage] = useState<TestCoverage>({
    statements: 0,
    branches: 0,
    functions: 0,
    lines: 0,
    files: 0
  });
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const { theme, config } = useTheme();
  const { addNotification } = useNotifications();

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const loadTestingData = async () => {
      setIsLoading(true);
      
      // Simulate API calls
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setTestSuites([
        {
          id: '1',
          name: 'Unit Tests',
          description: 'Component and utility function tests',
          status: 'passed',
          duration: 45,
          lastRun: '2024-01-15T10:30:00Z',
          passRate: 98.5,
          totalTests: 234,
          passedTests: 231,
          failedTests: 3,
          skippedTests: 0,
          category: 'unit',
          environment: 'development',
          tags: ['components', 'utils', 'hooks']
        },
        {
          id: '2',
          name: 'Integration Tests',
          description: 'API and service integration tests',
          status: 'passed',
          duration: 120,
          lastRun: '2024-01-15T10:25:00Z',
          passRate: 95.2,
          totalTests: 89,
          passedTests: 85,
          failedTests: 4,
          skippedTests: 0,
          category: 'integration',
          environment: 'staging',
          tags: ['api', 'services', 'database']
        },
        {
          id: '3',
          name: 'E2E Tests',
          description: 'End-to-end user journey tests',
          status: 'running',
          duration: 0,
          lastRun: '2024-01-15T10:35:00Z',
          passRate: 92.1,
          totalTests: 45,
          passedTests: 0,
          failedTests: 0,
          skippedTests: 0,
          category: 'e2e',
          environment: 'staging',
          tags: ['user-journey', 'workflows', 'critical-path']
        },
        {
          id: '4',
          name: 'Performance Tests',
          description: 'Load and performance testing',
          status: 'failed',
          duration: 300,
          lastRun: '2024-01-15T09:45:00Z',
          passRate: 78.3,
          totalTests: 23,
          passedTests: 18,
          failedTests: 5,
          skippedTests: 0,
          category: 'performance',
          environment: 'production',
          tags: ['load-testing', 'performance', 'optimization']
        },
        {
          id: '5',
          name: 'Security Tests',
          description: 'Security vulnerability and penetration tests',
          status: 'passed',
          duration: 180,
          lastRun: '2024-01-14T16:20:00Z',
          passRate: 100,
          totalTests: 67,
          passedTests: 67,
          failedTests: 0,
          skippedTests: 0,
          category: 'security',
          environment: 'staging',
          tags: ['security', 'vulnerability', 'penetration']
        }
      ]);

      setTestResults([
        {
          id: '1',
          testName: 'should render user profile correctly',
          suite: 'Unit Tests',
          status: 'passed',
          duration: 12,
          timestamp: '2024-01-15T10:30:15Z',
          browser: 'Chrome 120',
          device: 'Desktop'
        },
        {
          id: '2',
          testName: 'should handle API error gracefully',
          suite: 'Integration Tests',
          status: 'failed',
          duration: 45,
          error: 'Expected status 200 but got 500',
          stackTrace: 'Error: Expected status 200 but got 500\n    at expect (test.js:45:12)',
          timestamp: '2024-01-15T10:25:30Z',
          browser: 'Chrome 120',
          device: 'Desktop'
        },
        {
          id: '3',
          testName: 'should complete user registration flow',
          suite: 'E2E Tests',
          status: 'running',
          duration: 0,
          timestamp: '2024-01-15T10:35:00Z',
          browser: 'Chrome 120',
          device: 'Desktop'
        },
        {
          id: '4',
          testName: 'should load page within 2 seconds',
          suite: 'Performance Tests',
          status: 'failed',
          duration: 2500,
          error: 'Page load time exceeded 2 seconds',
          timestamp: '2024-01-15T09:45:45Z',
          browser: 'Chrome 120',
          device: 'Desktop'
        },
        {
          id: '5',
          testName: 'should prevent SQL injection',
          suite: 'Security Tests',
          status: 'passed',
          duration: 8,
          timestamp: '2024-01-14T16:20:12Z',
          browser: 'Chrome 120',
          device: 'Desktop'
        }
      ]);

      setCoverage({
        statements: 87.5,
        branches: 82.3,
        functions: 91.2,
        lines: 88.7,
        files: 156
      });

      setPerformanceMetrics({
        loadTime: 1.2,
        firstContentfulPaint: 0.8,
        largestContentfulPaint: 1.5,
        firstInputDelay: 45,
        cumulativeLayoutShift: 0.05,
        timeToInteractive: 2.1
      });

      setIsLoading(false);
    };

    loadTestingData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDuration = (seconds: number) => {
    if (seconds < 60) {
      return `${seconds}s`;
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900';
      case 'failed':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900';
      case 'running':
        return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900';
      case 'skipped':
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed':
        return <CheckCircle className="w-4 h-4" />;
      case 'failed':
        return <XCircle className="w-4 h-4" />;
      case 'running':
        return <Activity className="w-4 h-4" />;
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'skipped':
        return <EyeOff className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'unit':
        return <Code className="w-4 h-4" />;
      case 'integration':
        return <Database className="w-4 h-4" />;
      case 'e2e':
        return <Globe className="w-4 h-4" />;
      case 'performance':
        return <Zap className="w-4 h-4" />;
      case 'security':
        return <Shield className="w-4 h-4" />;
      default:
        return <TestTube className="w-4 h-4" />;
    }
  };

  const handleRunTests = (suiteId?: string) => {
    addNotification({
      type: 'info',
      title: 'Tests Started',
      message: suiteId ? `Running test suite ${suiteId}` : 'Running all tests'
    });
  };

  const handleStopTests = () => {
    addNotification({
      type: 'warning',
      title: 'Tests Stopped',
      message: 'All running tests have been stopped'
    });
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Tests</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {testSuites.reduce((sum, suite) => sum + suite.totalTests, 0)}
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">
                {testSuites.reduce((sum, suite) => sum + suite.passedTests, 0)} passed
              </p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
              <TestTube className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pass Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {((testSuites.reduce((sum, suite) => sum + suite.passedTests, 0) / 
                   testSuites.reduce((sum, suite) => sum + suite.totalTests, 0)) * 100).toFixed(1)}%
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">Overall success rate</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Code Coverage</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{coverage.lines}%</p>
              <p className="text-xs text-blue-600 dark:text-blue-400">{coverage.files} files covered</p>
            </div>
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
              <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Performance Score</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {Math.round((100 - performanceMetrics.cumulativeLayoutShift * 100))}
              </p>
              <p className="text-xs text-orange-600 dark:text-orange-400">
                {performanceMetrics.loadTime}s load time
              </p>
            </div>
            <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900">
              <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Test Suites Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Test Suites Status</h3>
          <div className="space-y-3">
            {testSuites.map((suite) => (
              <div key={suite.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getCategoryIcon(suite.category)}
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{suite.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{suite.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(suite.status)}`}>
                    {getStatusIcon(suite.status)}
                    <span className="ml-1">{suite.status}</span>
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {suite.passRate}% pass rate
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Test Results</h3>
          <div className="space-y-3">
            {testResults.slice(0, 5).map((result) => (
              <div key={result.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{result.testName}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{result.suite}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(result.status)}`}>
                    {getStatusIcon(result.status)}
                    <span className="ml-1">{result.status}</span>
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {formatDuration(result.duration)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Code Coverage</h3>
          <div className="space-y-4">
            {Object.entries(coverage).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                  {key}
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white w-12 text-right">
                    {value}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            {Object.entries(performanceMetrics).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {typeof value === 'number' ? (key.includes('Time') || key.includes('Paint') ? `${value}s` : value) : value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTestSuites = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Test Suites</h2>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleRunTests()}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
          >
            <Play className="w-4 h-4" />
            <span>Run All</span>
          </button>
          <button
            onClick={handleStopTests}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
          >
            <Pause className="w-4 h-4" />
            <span>Stop All</span>
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Test Suite</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Results</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Run</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {testSuites.map((suite) => (
                <tr key={suite.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{suite.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{suite.description}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getCategoryIcon(suite.category)}
                      <span className="text-sm text-gray-900 dark:text-white capitalize">{suite.category}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(suite.status)}`}>
                      {getStatusIcon(suite.status)}
                      <span className="ml-1">{suite.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600 dark:text-green-400">{suite.passedTests} passed</span>
                        <span className="text-red-600 dark:text-red-400">{suite.failedTests} failed</span>
                        {suite.skippedTests > 0 && (
                          <span className="text-gray-600 dark:text-gray-400">{suite.skippedTests} skipped</span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {suite.passRate}% pass rate
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatDuration(suite.duration)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(suite.lastRun)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleRunTests(suite.id)}
                        className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                      >
                        <Play className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderTestResults = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Test Results</h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search tests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="all">All Status</option>
            <option value="passed">Passed</option>
            <option value="failed">Failed</option>
            <option value="running">Running</option>
            <option value="skipped">Skipped</option>
          </select>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Test Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Suite</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Browser</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {testResults.map((result) => (
                <tr key={result.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{result.testName}</div>
                    {result.error && (
                      <div className="text-sm text-red-600 dark:text-red-400 mt-1">{result.error}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {result.suite}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(result.status)}`}>
                      {getStatusIcon(result.status)}
                      <span className="ml-1">{result.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatDuration(result.duration)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {result.browser}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(result.timestamp)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      {result.error && (
                        <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                          <Bug className="w-4 h-4" />
                        </button>
                      )}
                      <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'suites', name: 'Test Suites', icon: TestTube },
    { id: 'results', name: 'Test Results', icon: CheckCircle },
    { id: 'coverage', name: 'Coverage', icon: Target },
    { id: 'performance', name: 'Performance', icon: Zap },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading testing data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Testing Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor and manage your test suites, coverage, and performance
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'suites' && renderTestSuites()}
      {activeTab === 'results' && renderTestResults()}
      {activeTab === 'coverage' && (
        <div className="text-center py-12">
          <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Coverage Analysis</h3>
          <p className="text-gray-600 dark:text-gray-400">Detailed coverage analysis coming soon</p>
        </div>
      )}
      {activeTab === 'performance' && (
        <div className="text-center py-12">
          <Zap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Performance Testing</h3>
          <p className="text-gray-600 dark:text-gray-400">Performance testing tools coming soon</p>
        </div>
      )}
      {activeTab === 'settings' && (
        <div className="text-center py-12">
          <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Test Settings</h3>
          <p className="text-gray-600 dark:text-gray-400">Test configuration and settings coming soon</p>
        </div>
      )}
    </div>
  );
};

export default TestingDashboard;