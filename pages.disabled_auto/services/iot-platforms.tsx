import React from 'react';
import Link from 'next/link';

export default function IoTPlatforms() {
  return(
    <div className='bg-white'>
      <section className='container mx-auto px-4 py-12 max-w-6xl'>
        <h1 className='text-3xl md:text-5xl font-extrabold text-gray-900'>IoT Platforms</h1>
        <p className='mt-4 text-lg text-gray-600'>
          Connect devices, stream telemetry, act on real-time insights, and scale securely from pilot to production.
        </p>
      </section>
      <section className='bg-gray-50 border-t border-b border-gray-100'>
        <div className='container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl'>
          {[{ title: 'Device Onboarding', desc: 'Provisioning, secure comms, OTA updates.', price: '$10,000–$40,000' },
            { title: 'Telemetry Pipelines', desc: 'Ingestion, time-series storage, analytics.', price: '$12,000–$50,000+' },
            { title: 'Edge AI', desc: 'On-device ML for vision and anomaly detection.', price: '$15,000–$70,000' },
            { title: 'Digital Twins', desc: 'Model assets and processes for simulation.', price: '$18,000–$80,000' },
            { title: 'Fleet Management', desc: 'Monitoring, health, command/control.', price: '$8,000–$35,000' },
            { title: 'IoT Security', desc: 'PKI, attestation, secure boot, posture.', price: '$8,000–$30,000' }].map((item) => (
            <div key={item.title} className='p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
              <h3 className='text-xl font-semibold text-gray-900'>{item.title}</h3>
              <p className='mt-2 text-gray-600'>{item.desc}</p>
              <p className='mt-4 text-gray-900 font-medium'>Typical budget: {item.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='container mx-auto px-4 py-12 max-w-6xl'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>Reference Stack</h2>
        <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-sm'>
          {['MQTT', 'LoRaWAN', 'Azure IoT', 'AWS IoT', 'GCP IoT', 'InfluxDB', 'Timescale', 'Grafana', 'Kafka', 'NATS'].map((t) => (
            <div key={t} className='px-3 py-2 bg-gray-100 text-gray-800 rounded-md text-center'>{t}</div>
          ))}
        </div>
        <div className='mt-6'>
          <Link href='/contact' className='inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold'>Start your pilot</Link>
        </div>
      </section>
    </div>
  )}