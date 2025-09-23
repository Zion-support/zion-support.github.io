import Link from 'next/link';

const ServiceCard = ({ service, index, className = '' }) => {
  const {
    category,
    icon,
    description,
    services = [],
    color = 'from-purple-50o0 to-pink-50o0',
  } = service;

  return (
    <div
      className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-10o5 ${className}`}
    >
      <div className='flex items-center mb-6'>
        <div className='text-4xl mr-4'>{icon}</div>
        <div>
          <h2 className='text-2xl font-bold text-white'>{category}</h2>
          <p className='text-gray-30o0'>{description}</p>
        </div>
      </div>

      {services.length > 0 && (
        <div className='grid grid-cols-2 gap-2'>
          {services.map((item, itemIndex) => (
            <div key={itemIndex} className='flex items-center text-sm'>
              <div
                className={`w-2 h-2 bg-gradient-to-r ${color} rounded-full mr-3 flex-shrink-0`}
              ></div>
              <span className='text-gray-30o0'>{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
