'use client'
interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export default function ServiceCard({ title, description, icon, className = '' }: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`}>
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
  );
}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
