'use client';
import ServiceBrowser from './ServiceBrowser';
interface Service { name?: string; title?: string; description?: string; icon?: string; href?: string; category?: string; }
export default function ServiceGridWithSearch({ services, title }: { services: Service[]; title?: string }) {
  return (
    <div>
      {title && <h2 className="text-3xl font-bold text-white mb-6 text-center">{title}</h2>}
      <ServiceBrowser services={services} />
    </div>
  );
}
