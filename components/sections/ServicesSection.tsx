
const ServicesSection: React.FC = () => {
  const services = [
    {
    {
      icon: Wifi,
      title: 'IoT Platforms',
      description: 'Connected device solutions and IoT platform development.',
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
              </div>
            </motion.div>
          ))}
        </motion.div>

