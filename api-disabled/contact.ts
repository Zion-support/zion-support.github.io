<<<<<<< HEAD
module.exports = {};
=======
<<<<<<< HEAD
export {};
ursor/add-new-services-and-deploy-updates-0462
module.exports = {};
ursor/add-new-services-and-deploy-updates-0462
module.exports = {};
module.exports = {};
module.exports = {};
module.exports = {};

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({ 
        message: 'Missing required fields: name, email, and message are required' 
      })}

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({ 
        message: 'Invalid email format' 
      })}
    res.status(200).json({ 
      message: 'Thank you for your message! We will get back to you soon.',
      success: true 
    })} catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      message: 'Internal server error. Please try again later.',
      success: false 
    })}
}
=======
module.exports = {};
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
