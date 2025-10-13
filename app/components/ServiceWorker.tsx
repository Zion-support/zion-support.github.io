  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
            ServiceWorker
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced service worker solutions powered by AI technology.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
      {/* Features Section */}
      <section className="py-20 px-4">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key Features
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI technology that drives results
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">"
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">"
                  <feature.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">"
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                  ))}
            ))}
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our ServiceWorker?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our advanced service worker solutions
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">"
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                ))}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400 mr-3" />
                  <span>+1 (555) 123-4567
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400 mr-3" />
                  <span>contact@ziontechgroup.com
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  <span>San Francisco, CA
      {/* CTA Section */}
      <section className="py-20 px-4">"
        <div className="max-w-4xl mx-auto text-center">"
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12">"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your requirements and get started today.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
  )
}

export default ServiceWorker.
