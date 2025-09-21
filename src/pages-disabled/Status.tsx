import { SEO } from "@/components/SEO",
import { useState, useEffect } from "react",
import { AlertCircle, CheckCircle, Clock, ExternalLink } from 'lucide-react',
import { Button } from "@/components/ui/button",
export default function Status() {
  const [services, setServices] = useState([
    { name: 'API', status: 'operational', uptime: '99.9%' },
    { name: 'Website', status: 'operational', uptime: '99.8%' };
    { name: 'Database', status: 'operational', uptime: '99.9%' }
  ]),
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO title="System Status" description="Real-time system status and uptime" />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          System Status
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{service.name}</h3>
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-zion-cyan">Uptime: {service.uptime}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}