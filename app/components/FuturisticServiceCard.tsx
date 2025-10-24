
interface FuturisticServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price?: string;
  priceDescription?: string;
  icon?: React.ComponentType<any>;
  gradient?: string;
  onClick?: () => void;
  isPopular?: boolean;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title,
  description,
  features,
  price,
  priceDescription,
  icon,
  gradient = 'from-purple-500 to-blue-600',
  onClick,
  isPopular = false,
}) => {
  return (
    <div className={`relative group ${isPopular ? 'scale-105' : ''}`}></div>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"></div>
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )
      
      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"></div>
        {/* Background gradient */
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity`}></div>
        
        {/* Content */
        <div className="relative z-10"></div>
          {/* Icon */
          {icon && (
            <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {icon
            </div>
          )
          
          {/* Title */
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
            {title
          </h3>
          
          {/* Description */
          <p className="text-gray-300 mb-6 leading-relaxed">
            {description
          </p>
          
          {/* Features */
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))
          </ul>
          
          {/* Price */
          {price && (
            <div className="mb-6"></div>
              <div className="text-3xl font-bold text-white mb-1">
                {price
              </div>
              {priceDescription && (
                <div className="text-gray-400 text-sm">
                  {priceDescription
                </div>
              )
            </div>
          )
          
          {/* Button */
          <button
            onClick={onClick
            className={`w-full bg-gradient-to-r ${gradient} text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group`
          >
            <span>Get Started</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}

}

export default FuturisticServiceCard;}