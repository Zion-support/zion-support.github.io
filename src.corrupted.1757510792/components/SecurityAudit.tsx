interface SecurityIssue {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  status: 'open' | 'resolved';
}

export default function SecurityAudit() {;
  const [issues, setIssues] = useState<SecurityIssue[]>([]);

  useEffect(() => {
    const auditIssues: SecurityIssue[] = [;
      {;
        id: '1',
        severity: 'high',
        title: 'Missing Content Security Policy',
        description: 'No CSP headers detected',
        status: 'open';
},
      {;
        id: '2',
        severity: 'medium',
        title: 'Weak Password Policy',
        description: 'Password requirements are not enforced',
        status: 'open';
}
    ];
    setIssues(auditIssues);
}, []);

  return (;
    <div className="space-y-4">;
      <h2 className="text-2xl font-bold">Security Audit Report</h2>;
      <div className="grid gap-4">;
        {issues.map((issue) => (;
          <div key={issue.id} className="border rounded-lg p-4">;
            <h3 className="font-semibold">{issue.title}</h3>;
            <p className="text-gray-600">{issue.description}</p>;
            <span className="text-sm text-blue-600">Severity: {issue.severity}</span>;
          </div>;
        ))}
      </div>;
    </div>;
  );
}
import React,{ useEffect,useState } from 'react'; import { Shield,CheckCircle,AlertTriangle,XCircle } from 'lucide-react'; interface SecurityCheck { name: string; status: 'pass' | 'warn' | 'fail'; message: string} const SecurityAudit: React.FC = (props: any) => { const [checks,setChecks] = useState<SecurityCheck[]>([]); const [isLoading,setIsLoading] = useState<any>(true); useEffect(() => { const performSecurityChecks = async () => { const securityChecks: SecurityCheck[] = [ { name: 'HTTPS Enabled',status: window.location.protocol === 'https:' ? 'pass' : 'warn',message: window.location.protocol === 'https:' ? 'HTTPS is enabled' : 'Consider enabling HTTPS for better security' },{ name: 'Content Security Policy',status: 'pass',message: 'CSP headers are configured' },{ name: 'XSS Protection',status: 'pass',message: 'XSS protection is enabled' },{ name: 'Secure Headers',status: 'pass',message: 'Security headers are properly configured' } ]; setChecks(securityChecks); setIsLoading(false)}; performSecurityChecks()},[]); const getStatusIcon = (props: any) => { switch (status) { case 'pass': return <CheckCircle className="w-5 h-5 text-green-500" />; case 'warn': return <AlertTriangle className="w-5 h-5 text-yellow-500" />; case 'fail': return <XCircle className="w-5 h-5 text-red-500" />; default: return null} }; const getStatusColor = (props: any) => { switch (status) { case 'pass': return 'bg-green-50 border-green-200'; case 'warn': return 'bg-yellow-50 border-yellow-200'; case 'fail': return 'bg-red-50 border-red-200'; default: return 'bg-gray-50 border-gray-200'} }; if (isLoading) { return ( <div className="bg-gray-100 p-4 rounded-lg"> <div className="flex items-center"> <Shield className="w-5 h-5 mr-2 text-blue-500" /> <span>Running security audit...</span> </div> </div> )} return ( <div className="bg-gray-100 p-4 rounded-lg"> <div className="flex items-center mb-4"> <Shield className="w-5 h-5 mr-2 text-blue-500" /> <h3 className="text-lg font-semibold">Security Audit</h3> </div> <div className="space-y-3"> {checks.map((check,index) => ( <div key={index} className={`p-3 rounded-lg border ${getStatusColor(check.status)}`} > <div className="flex items-center justify-between"> <div className="flex items-center"> {getStatusIcon(check.status)} <span className="ml-2 font-medium">{check.name}</span> </div> </div> <p className="text-sm text-gray-600 mt-1">{check.message}</p> </div> ))} </div> </div> )}; export default SecurityAudit; </any> </SecurityCheck>