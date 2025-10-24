// Enhanced type definitions for better type safety
export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  firstMeaningfulPaint: number;
}

export interface ErrorContext {
  component: string;
  error: Error;
  errorInfo?: any;
  timestamp: number;
  userId?: string;
}

export interface AccessibilityAudit {
  score: number;
  issues: AccessibilityIssue[];
  timestamp: number;
  url: string;
}

export interface AccessibilityIssue {
  id: string;
  severity: 'error' | 'warning' | 'info';
  message: string;
  element: string;
  helpUrl?: string;
}

export interface SEOAudit {
  score: number;
  issues: SEOIssue[];
  suggestions: SEOSuggestion[];
  timestamp: number;
  url: string;
}

export interface SEOIssue {
  id: string;
  severity: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  helpUrl?: string;
}

export interface SEOSuggestion {
  id: string;
  message: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

export interface SecurityAudit {
  score: number;
  issues: SecurityIssue[];
  timestamp: number;
  url: string;
}

export interface SecurityIssue {
  id: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  message: string;
  category: string;
  helpUrl?: string;
}

export interface PerformanceAudit {
  score: number;
  metrics: PerformanceMetrics;
  opportunities: PerformanceOpportunity[];
  diagnostics: PerformanceDiagnostic[];
  timestamp: number;
  url: string;
}

export interface PerformanceOpportunity {
  id: string;
  title: string;
  description: string;
  score: number;
  savings: number;
  category: string;
}

export interface PerformanceDiagnostic {
  id: string;
  title: string;
  description: string;
  score: number;
  category: string;
}

export interface UserExperienceMetrics {
  accessibility: AccessibilityAudit;
  seo: SEOAudit;
  security: SecurityAudit;
  performance: PerformanceAudit;
  overallScore: number;
  timestamp: number;
}

export interface MonitoringConfig {
  enabled: boolean;
  interval: number;
  thresholds: {
    performance: number;
    accessibility: number;
    seo: number;
    security: number;
  };
  alerts: {
    email: string[];
    webhook?: string;
  };
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string;
}

export interface ButtonProps extends ComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export interface InputProps extends ComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface CardProps extends ComponentProps {
  title?: string;
  description?: string;
  image?: string;
  actions?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
}

export interface ModalProps extends ComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closable?: boolean;
}

export interface TableProps extends ComponentProps {
  data: any[];
  columns: TableColumn[];
  pagination?: boolean;
  pageSize?: number;
  sortable?: boolean;
  filterable?: boolean;
}

export interface TableColumn {
  key: string;
  title: string;
  dataIndex: string;
  render?: (value: any, record: any) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  width?: number;
}

export interface FormProps extends ComponentProps {
  onSubmit: (data: any) => void;
  initialValues?: any;
  validation?: any;
  loading?: boolean;
}

export interface NotificationProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  closable?: boolean;
}

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system';
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  borderRadius: number;
  spacing: number;
}

export interface LayoutConfig {
  header: {
    height: number;
    sticky: boolean;
  };
  sidebar: {
    width: number;
    collapsed: boolean;
  };
  footer: {
    height: number;
    sticky: boolean;
  };
}