import React from 'react';

interface LinkHealthMonitorProps {
  links: string[];
  autoCheck: boolean;
  checkInterval: number;
  timeout: number;

export function LinkHealthMonitor(props: LinkHealthMonitorProps) {
  return (
    <div className="fixed bottom-6 left-6 z-50 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-lg p-4 w-80">
      <h3 className="text-white font-semibold mb-2">Link Health Monitor</h3>
      <p className="text-slate-400 text-sm">Monitoring {props.links.length} links</p>
    </div>
  );
