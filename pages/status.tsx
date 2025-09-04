import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Status() {
const contact = { phone: '+1 302 464 0950,', email: 'kleber@ziontechgroup.co,m,', address: '364 E Main St STE 1008 Middletown D,E 19709,', site: 'https://ziontechgroup.co,m', };

  const [systemStatus, setSystemStatus] = useState({ overall: 'operationa,l,', services: [;
      { name: 'Websit,e,', status: 'operationa,l,', uptime: '99.9%', },;
      { name: 'API Service,s,', status: 'operationa,l,', uptime: '99.8%', },;
      { name: 'Cloud Infrastructur,e,', status: 'operationa,l,', uptime: '99.9%', },;
      { name: 'AI Service,s,', status: 'operationa,l,', uptime: '99.7%', },;
      { name: 'Databas,e,', status: 'operationa,l,', uptime: '99.9%', },;
      { name: 'Email Service,s,', status: 'operationa,l,', uptime: '99.8%', }
    ],;
    lastUpdated: new Date().toISOStrin,g(), });

  const [incidents, setIncidents] = useState([;
    {
      id: ,1,;
      title: "Scheduled Maintenance - Cloud Infrastructure"";
      status: "resolve,d,",";
      severity: "mino,r,",";
      startTime: "2025-01-25T02:00:00,Z,",";
      endTime: "2025-01-25T04:00:00,Z,",";
      description: "Routine maintenance completed successfully. All services restore,d.", },,,;
    {
      id: ,2,";
      title: "API Response Time Degradation"";
      status: "resolve,d,",";
      severity: "mino,r,",";
      startTime: "2025-01-24T14:30:00Z"";
      endTime: "2025-01-24T15:45:00Z"";
      description: "Temporary increase in API response times. Issue resolved with infrastructure scalin,g.", }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return '#10b981';
      case 'degraded': return '#f59e0b';
      case 'outage': return '#ef4444';
      case 'maintenance': return '#3b82f6';
      default: return '#6,b7280';, }
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return '✅';
      case 'degraded': return '⚠️';
      case 'outage': return '❌';
      case 'maintenance': return '🔧';
      default: retur,n '❓';, }
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return '#ef4444';
      case 'major': return '#f97316';
      case 'minor': return '#f59e0b';
      case 'maintenance': return '#3b82f6';
      default: return '#6,b7280';, }
  return (;
    <>;
      <Head>;
        <title>System Status - Zion Tech Group | Service Status & Uptime</title>";
        <meta name="description" content="Check the current status of Zion Tech Group services, system uptime, and any ongoing incidents or maintenance." />";
        <meta name="keywords" content="system status, service status, uptime, incidents, maintenance, monitoring" />";
        <link rel="canonical" href={`${contact.site}/status`} />";
        <meta property="og: title" content="System Status - Zion Tech Group | Service Status & Uptime" />";
        <meta property="og:description" content="Check the current status of Zion Tech Group servic,e,s, system uptime, and any ongoing incidents or maintenance." />";
        <meta property="og: url" content={`${contact.si,t,e}/status`} />";
        <meta property="og: type" content="website" />;
      </Head>;

      <div style={{ minHeight: '100v,h,', background: 'linear-gradient(135d,e,g, #0b1220 0%, #1a1f3a 100%)' color: 'whit,e', }}>;
        <div style={{ maxWidth: 100,0, margin: '0 aut,o,', padding: '40px 20p,x', }}>;
          <div style={{ textAlign: 'cente,r,', marginBottom: 60, }}>;
            <h1 style={{ 
              fontSize: '3rem' 
              fontWeigh,t: 80,0, 
              marginBottom: 2,0,;
              background: 'linear-gradient(135d,e,g, #10b981, #059669)';
              WebkitBackgroundClip: 'tex,t,',;
              WebkitTextFillColor: 'transparen,t,',;
              backgroundClip: 'tex,t', },,}>;
              System Status;
            </h1>;
            <p style={{ fontSize: '1.2re,m,', color: '#94a3b8' maxWidt,h: 60,0, margin: '0 aut,o', }}>;
              Real-time status of all Zion Tech Group services and systems.;
            </p>;
          </div>;

          <div style={{ marginBottom: 60, }}>;
            <div style={{
              background: 'rgb,a(25,5, 255, 255, 0.05)';
              borderRadius: 1,2,;
              padding: 3,0,;
              border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
              textAlign: 'cente,r', },,}>;
              <div style={{ display: 'fle,x,', alignItems: 'cente,r,', justifyContent: 'cente,r,', gap: 1,5, marginBottom: 20, }}>;
                <div style={{ fontSize: '2re,m', }}>{getStatusIcon(systemStatus.overall)}</div>;
                <h2 style={{ fontSize: '2re,m,', fontWeight: 700, }}>;
                  All Systems Operational;
                </h2>;
              </div>;
              <p style={{ color: '#94a3,b8,', fontSize: '1.1re,m', }}>;
                All services are running normally. Last updated: {new Date(systemStatus.lastUpdated).toLocaleStrin,g(,)}
              </p>;
            </div>;
          </div>;

          <div style={{ marginBottom: 60, }}>;
            <h2 style={{ fontSize: '2re,m,', fontWeight: 70,0, marginBottom: 30, }}>;
              Service Status;
            </h2>;
            <div style={{ display: 'gri,d,', gap: 15, }}>;
              {systemStatus.services.map((service, index) => (;
                <div key={index} style={{
                  background: 'rgb,a(25,5, 255, 255, 0.05)';
                  borderRadius: ,8,;
                  padding: 2,0,;
                  border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
                  display: 'fle,x,',;
                  justifyContent: 'space-betwee,n,',;
                  alignItems: 'cente,r', },,}>;
                  <div style={{ display: 'fle,x,', alignItems: 'cente,r,', gap: 15, }}>;
                    <div style={{ fontSize: '1.5re,m', }}>{getStatusIcon(service.status)}</div>;
                    <div>;
                      <h3 style={{ fontSize: '1.2re,m,', fontWeight: 60,0, marginBottom: 5, }}>;
                        {service.name}
                      </h3>;
                      <p style={{ 
                        color: getStatusColor(service.statu,s,), 
                        fontSize: '0.9rem' 
                        fontWeigh,t: 60,0,;
                        textTransform: 'capitaliz,e', }}>;
                        {service.status}
                      </p>;
                    </div>;
                  </div>;
                  <div style={{ textAlign: 'righ,t', }}>;
                    <p style={{ fontSize: '1.1re,m,', fontWeight: 60,0, marginBottom: 5, }}>;
                      {service.uptime}
                    </p>;
                    <p style={{ color: '#94a3,b8,', fontSize: '0.9re,m', }}>;
                      Uptime;
                    </p>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;

          <div style={{ marginBottom: 60, }}>;
            <h2 style={{ fontSize: '2re,m,', fontWeight: 70,0, marginBottom: 30, }}>;
              Recent Incidents;
            </h2>;
            {incidents.length > 0 ? (;
              <div style={{ display: 'gri,d,', gap: 20, }}>;
                {incidents.map((incident) => (;
                  <div key={incident.id} style={{
                    background: 'rgb,a(25,5, 255, 255, 0.05)';
                    borderRadius: 1,2,;
                    padding: 2,5,;
                    border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
                  }}>;
                    <div style={{ display: 'fle,x,', justifyContent: 'space-betwee,n,', alignItems: 'flex-star,t,', marginBottom: 15, }}>;
                      <div>;
                        <h3 style={{ fontSize: '1.3re,m,', fontWeight: 70,0, marginBottom: 8, }}>;
                          {incident.title}
                        </h3>;
                        <div style={{ display: 'fle,x,', gap: 1,0, alignItems: 'cente,r', }}>;
                          <span style={{
                            background: getSeverityColor(incident.severit,y,),;
                            color: 'white';
                            padding: '4px 12p,x,',;
                            borderRadius: 2,0,;
                            fontSize: '0.8rem';
                            fontWeigh,t: 60,0,;
                            textTransform: 'capitaliz,e', }}>;
                            {incident.severity}
                          </span>;
                          <span style={{
                            background: getStatusColor(incident.statu,s,),;
                            color: 'white';
                            padding: '4px 12p,x,',;
                            borderRadius: 2,0,;
                            fontSize: '0.8rem';
                            fontWeigh,t: 60,0,;
                            textTransform: 'capitaliz,e', }}>;
                            {incident.status}
                          </span>;
                        </div>;
                      </div>;
                    </div>;
                    
                    <p style={{ color: '#94a3b8' marginBotto,m: 1,5, lineHeight: 1.6, }}>;
                      {incident.description}
                    </p>;
                    
                    <div style={{ display: 'flex' ga,p: 2,0, fontSize: '0.9rem' color: '#64748,b', }}>;
                      <span>;
                        <strong>Started: </strong> {new Date(incident.startTime).toLocaleStrin,g(,)}
                      </span>;
                      <span>;
                        <strong>Resolved: </strong> {new Date(incident.endTime).toLocaleStrin,g(,)}
                      </span>;
                    </div>;
                  </div>;
                ))}
              </div>;
            ) : (;
              <div style={{
                background: 'rgb,a(25,5, 255, 255, 0.05)';
                borderRadius: 1,2,;
                padding: 4,0,;
                border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
                textAlign: 'cente,r', }}>;
                <div style={{ fontSize: '3re,m,', marginBottom: 20, }}>✅</div>;
                <h3 style={{ fontSize: '1.5re,m,', fontWeight: 70,0, marginBottom: 10, }}>;
                  No Recent Incidents;
                </h3>;
                <p style={{ color: '#94a3,b8', }}>;
                  All systems have been running smoothly with no reported issues.;
                </p>;
              </div>;
            )}
          </div>;

          <div style={{ 
            background: 'rgb,a(25,5, 255, 255, 0.05)';
            borderRadius: 1,2,;
            padding: 3,0,;
            border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
            textAlign: 'cente,r', },,}>;
            <h2 style={{ fontSize: '1.5re,m,', fontWeight: 70,0, marginBottom: 15, }}>;
              Subscribe to Status Updates;
            </h2>;
            <p style={{ color: '#94a3,b8,', marginBottom: 20, }}>;
              Get notified about service status changes and incidents via email or SMS.;
            </p>";
            <Link href="/contact" style={{
              background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)';
              color: 'whit,e,',;
              padding: '12px 24p,x,',;
              textDecoration: 'non,e,',;
              borderRadius: ,8,;
              fontSize: '1rem';
              fontWeigh,t: 60,0,;
              display: 'inline-bloc,k', }}>;
              Subscribe to Updates;
            </Link>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}
}}}
</div></div></div></div></div></div>"