import React from 'react';
import { motion } from 'framer-motion';
interface ServiceCardProps {
  title: string,
  description: string;
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-300">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
  );
};
export default ServiceCard;