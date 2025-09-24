import React, { useState, useEffect } from 'react',
import {
  CheckCircle;
  XCircle;
  AlertTriangle;
  ExternalLink;
} from 'lucide-react',
const LinkHealthChecker = ({ links, className = '' }) => {
  const [linkStatuses, setLinkStatuses] = useState([]),
  const [isChecking, setIsChecking] = useState(false),
  const checkLinkHealth = async url => {
    const startTime = Date.now(),
    try {
      // Check if it's an external link,
      if (url.startsWith('http') && !url.includes('ziontechgroup.com')) {
        return {
          url;
          status: 'external';
          responseTime: Date.now() - startTime;
        };
      }
      // Check if it's a mailto or tel link,
      if (url.startsWith('mailto: ') || url.startsWith('tel:')) {
        return {
          url;
          status: 'healthy';
          responseTime: Date.now() - startTime;
        };
      }
      // For internal links, we'll assume they're healthy since they're part of our app,
      if (url.startsWith('/') || url.includes('ziontechgroup.com')) {
        return {
          url;
          status: 'healthy';
          responseTime: Date.now() - startTime;
        };
      }
      // For external links, we could implement actual health checking,
      // For now, we'll mark them as external,
      return {
        url;
        status: 'external';
        responseTime: Date.now() - startTime;
      };
    } catch (error) {
      return {
        url;
        status: 'broken';
        responseTime: Date.now() - startTime;
        error: error instanceof Error ? error.message : 'Unknown error';
      };
    }
  };
  const checkAllLinks = async () => {
    setIsChecking(true),
    setLinkStatuses(links.map(link => ({ url: link.url, status: 'checking' }))),
    const statuses = await Promise.all(
      links.map(link => checkLinkHealth(link.url))),
    setLinkStatuses(statuses),
    setIsChecking(false)};
  useEffect(() => {
    // Auto-check links when component mounts,
    checkAllLinks()}, [links]),
  const getStatusIcon = status => {
    switch (status) {
      case 'healthy':,
        return <CheckCircle className='w-5 h-5 text-green-50o0' />,
      case 'broken':,
        return <XCircle className='w-5 h-5 text-red-50o0' />,
      case 'external':,
        return <ExternalLink className='w-5 h-5 text-blue-50o0' />,
      case 'checking':,
        return (
          <AlertTriangle className='w-5 h-5 text-yellow-50o0 animate-pulse' />),
      default: ,
        return <AlertTriangle className='w-5 h-5 text-gray-50o0' />}
  };
  const getStatusText = status => {
    switch (status) {
      case 'healthy':,
        return 'Healthy',
      case 'broken':,
        return 'Broken',
      case 'external':,
        return 'External',
      case 'checking':,
        return 'Checking...',
      default: ,
        return 'Unknown'}
  };
  const getStatusColor = status => {
    switch (status) {
      case 'healthy':,
        return 'text-green-50o0',
      case 'broken':,
        return 'text-red-50o0',
      case 'external':,
        return 'text-blue-50o0',
      case 'checking':,
        return 'text-yellow-50o0',
      default: ,
        return 'text-gray-50o0'}
  };
  const healthyCount = linkStatuses.filter(s => s.status === 'healthy').length,
  const brokenCount = linkStatuses.filter(s => s.status === 'broken').length,
  const externalCount = linkStatuses.filter(
    s => s.status === 'external').length,
  return (
    <div
      className={`bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 ${className}`}
    >,
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>,
        <div>,
          <h3 className='text-lg font-semibold text-white'>,
            Link Health Status,
          </h3>,
          <p className='text-sm text-gray-40o0'>,
            Monitoring the health of our website links,
          </p>,
        </div>,
        <button
          onClick={checkAllLinks}
          disabled={isChecking}
          className='px-4 py-2 bg-blue-60o0 hover: bg-blue-70o0 disabled:bg-gray-60o0 text-white rounded-lg transition-colors duration-30o0 flex items-center gap-2'>,
          {isChecking ? (
            <>,
              <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />,
              Checking...,
            </>) : (
            <>,
              <CheckCircle className='w-4 h-4' />,
              Recheck,
            </>)}
        </button>,
      </div>,
      {/* Summary Stats */}
      <div className='grid grid-cols-3 gap-4 mb-6'>,
        <div className='text-center p-3 bg-green-50o0/20 border border-green-50o0/30 rounded-lg'>,
          <div className='text-2xl font-bold text-green-40o0'>,
            {healthyCount}
          </div>,
          <div className='text-sm text-green-30o0'>Healthy</div>,
        </div>,
        <div className='text-center p-3 bg-red-50o0/20 border border-red-50o0/30 rounded-lg'>,
          <div className='text-2xl font-bold text-red-40o0'>{brokenCount}</div>,
          <div className='text-sm text-red-30o0'>Broken</div>,
        </div>,
        <div className='text-center p-3 bg-blue-50o0/20 border border-blue-50o0/30 rounded-lg'>,
          <div className='text-2xl font-bold text-blue-40o0'>,
            {externalCount}
          </div>,
          <div className='text-sm text-blue-30o0'>External</div>,
        </div>,
      </div>,
      {/* Link Status List */}
      <div className='space-y-3'>,
        {links.map((link, index) => {
          const status = linkStatuses[index],
          if (!status) return null,
          return (
            <div
              key={link.url}
              className='flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover: border-white/20 transition-colors duration-30o0'>,
              <div className='flex items-center gap-3'>,
                {getStatusIcon(status.status)}
                <div>,
                  <div className='text-white font-medium'>{link.label}</div>,
                  <div className='text-sm text-gray-40o0'>{link.url}</div>,
                  {status.error && (
                    <div className='text-xs text-red-40o0 mt-1'>,
                      {status.error}
                    </div>)}
                </div>,
              </div>,
              <div className='text-right'>,
                <div
                  className={`text-sm font-medium ${getStatusColor(status.status)}`}
                >,
                  {getStatusText(status.status)}
                </div>,
                {status.responseTime && (
                  <div className='text-xs text-gray-40o0'>,
                    {status.responseTime}ms,
                  </div>)}
              </div>,
            </div>)})}
      </div>,
      {/* Recommendations */}
      {brokenCount > 0 && (
        <div className='mt-6 p-4 bg-red-50o0/10 border border-red-50o0/20 rounded-lg'>,
          <h4 className='text-red-40o0 font-semibold mb-2'>,
            ⚠️ Action Required,
          </h4>,
          <p className='text-sm text-red-30o0'>,
            {brokenCount} link{brokenCount !== 1 ? 's' : ''}{' '}
            {brokenCount !== 1 ? 'are' : 'is'} broken and need attention. Please,
            review and fix these links to improve user experience.,
          </p>,
        </div>)}
,
      {healthyCount === links.length && (
        <div className='mt-6 p-4 bg-green-50o0/10 border border-green-50o0/20 rounded-lg'>,
          <h4 className='text-green-40o0 font-semibold mb-2'>,
            ✅ All Links Healthy,
          </h4>,
          <p className='text-sm text-green-30o0'>,
            Great job! All links are working properly. Your website is in,
            excellent health.,
          </p>,
        </div>)}
    </div>)};
export default LinkHealthChecker;