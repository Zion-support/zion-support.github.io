'use client'
import React from 'react'
import Link from 'next/link'
interface ServiceCardProps {
  title: string
  href: string
  description: string
  bullets?: string[]
  icon?: string
  className?: string
export default function ServiceCard({
  title,
  href,
  description,
  bullets = [],
  icon,
  className = ''
}: ServiceCardProps) {
  return (
    <Link href={href} className={`block group ${className}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full">
        {icon && (
          <div className="text-4xl mb-4">{icon}</div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {bullets.length > 0 && (
          <ul className="space-y-2">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700">
          Learn more →
        </div>
      </div>
    </Link>
  )
