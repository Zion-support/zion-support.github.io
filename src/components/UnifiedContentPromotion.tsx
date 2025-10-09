
const UnifiedContentPromotion: React.FC = () => {
    return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Zion Tech Group?
        </h2>
        <div>
          {features.map((feature, index) => (
            <div>
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link
                href={feature.link}
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>);
}
export default UnifiedContentPromotion