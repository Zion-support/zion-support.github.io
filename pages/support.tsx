      id: 'technical',
      name: 'Technical Issues',
      icon: <Code className="w - 8 h - 8 text - orange - 400" />,
      description: 'Bug reports and technical troubleshooting',
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w - 8 h - 8 text - cyan - 400" />,
      action: 'Start Chat',
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: <Phone className="w - 8 h - 8 text - green - 400" />,
      action: 'Call Now',
      color: 'from - green - 500 to - emerald - 600',
      available: true;
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: <Mail className="w - 8 h - 8 text - purple - 400" />,
      action: 'Send Email',
      color: 'from - purple - 500 to - pink - 600',
      available: true;
    },
    {
      title: 'Video Call',
      description: 'Screen share and visual assistance',
      icon: <Video className="w - 8 h - 8 text - orange - 400" />,
      action: 'Schedule Call',
      color: 'from - orange - 500 to - red - 600',
      available: true;
    }
  ],
  const popular_articles = [;
    {
      title: 'Getting Started with AI Consciousness Platform',
      category: 'AI Services',
      read_time: '5 min read',
      views: '2.4k',
      helpful: '98%';
    },
    {
      title: 'Setting Up Quantum - Secure Infrastructure',
      category: 'Quantum Solutions',
      read_time: '8 min read',
      views: '1.8k',
      helpful: '95%';
    },
    {
      title: 'Troubleshooting Autonomous System Errors',
      category: 'Autonomous Systems',
      views: '3.1k',
      helpful: '92%';
    },
    {
      title: 'API Integration Best Practices',
      category: 'Technical Issues',
      views: '4.2k',
      helpful: '96%';
    },
    {
      title: 'Understanding Your Invoice and Billing',
      category: 'Billing & Account',
      views: '1.5k',
      helpful: '89%';
    }
  ],
  const support_hours = [;
    {
      day: 'Monday - Friday',
      hours: '9:00 AM - 8:00 PM EST',
      status: 'Available';
    },
    {
      day: 'Saturday',
      hours: '10:00 AM - 6:00 PM EST',
    },
    {
      day: 'Sunday',
      hours: '12:00 PM - 6:00 PM EST',
    }
  ],
  const filtered_categories = selected_category === 'all';
    ? support_categories;
    : support_categories.filter (cat => cat.id === selected_category),
  return (
    <div className="min - h-screen bg - black text - white">;
      {/* Hero Section */}
      <section className="relative pt - 32 pb - 20 overflow - hidden">;
        <div className="absolute inset - 0 bg - gradient - to - br from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20" />;
        <div className="relative z - 10 container mx - auto px - 4">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
      {/* Quick Actions */}
      <section className="py - 20">;
        <div className="container mx - auto px - 4">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
                key={action.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor - pointer";
              >;
                <div className="p - 6 bg - gradient - to - br from - gray - 900 / 50 to - black / 50 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300">;
                  <div className="flex justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300">;
                    {action.icon}
          {/* Category Filter */}
          <div className="flex justify - center mb - 12">;
            <div className="flex flex - wrap gap - 3">;
              <button;
                on_click={() => setSelectedCategory ('all')}
                className={`px - 6 py - 3 rounded - xl font - medium transition - all duration - 300 ${
                  selected_category === 'all';
                    ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                    : 'bg - gray - 800 / 50 text - gray - 300 hover:bg - gray - 700 / 50';
                }`}
              >;
                All Categories;
              </button>;
              {support_categories.map ((category) => (
                <button;
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 6 py - 3 rounded - xl font - medium transition - all duration - 300 ${
                    selected_category === category.id;
                      ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                      : 'bg - gray - 800 / 50 text - gray - 300 hover:bg - gray - 700 / 50';
                  }`}
                >;
                  {category.name}
                key={category.id}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor - pointer";
              >;
                <div className="p - 6 bg - gradient - to - br from - gray - 900 / 30 to - black / 30 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300">;
                  <div className="flex items - start gap - 4 mb - 4">;
                    <div className="flex - shrink - 0">{category.icon}</div>;
                    <div>;
                      <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300">;
                        {category.name}
        {/* Support Channels */}
        <section className="py - 20 px - 4 bg - gradient - to - r from - gray - 900 / 50 to - black / 50">;
          <div className="max - w-6xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
                  key={channel.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text - center p - 6 bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 rounded - 2xl border border - gray - 700 / 30 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <div className="flex justify - center mb - 4">;
                    {channel.icon}
        {/* Search and Filter */}
        <section className="py - 12 px - 4">;
          <div className="max - w-6xl mx - auto">;
            <div className="flex flex - col lg:flex - row gap - 6 items - center">;
              {/* Search Bar */}
              {/* Category Filter */}
              <div className="flex flex - wrap gap - 2">;
                {support_categories.map ((category) => (
                  <button;
                    key={category.id}
                    on_click={() => setSelectedCategory (category.id)}
                    className={`px - 4 py - 2 rounded - lg border transition - all duration - 300 flex items - center gap - 2 ${
                      selected_category === category.id;
                        ? 'bg - cyan - 500 / 20 border - cyan - 500 / 50 text - cyan - 400';
                        : 'bg - gray - 800 / 50 border - gray - 600 text - gray - 300 hover:bg - cyan - 500 / 20 hover:border - cyan - 500 / 50';
                    }`}
                  >;
                    {category.icon}
                    {category.name}
                  key={resource.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p - 6 bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 rounded - 2xl border border - gray - 700 / 30 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <div className="flex justify - center mb - 4">;
                    {resource.icon}
                  </div>;
                  <h3 className="text - lg font - bold text - white mb - 2">{resource.title}</h3>;
                  <p className="text - gray - 300 text - sm mb - 4">{resource.description}</p>;
                  <div className="flex items - center justify - between">;
                    <span className="px - 2 py - 1 bg - gray - 700 / 50 text - gray - 300 rounded - full text - xs">;
                      {resource.category}
                    </span>;
                    <a;
                      href={resource.link}
                key={article.title}
                initial={{ opacity: 0, coordinate_x: -20 }}
                whileInView={{ opacity: 1, coordinate_x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor - pointer";
              >;
                <div className="p - 6 bg - gradient - to - br from - gray - 900 / 50 to - black / 50 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300">;
                  <div className="flex items - start justify - between gap - 4">;
                    <div className="flex - 1">;
                      <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300">;
                        {article.title}
                      </h3>;
                      <div className="flex items - center gap - 4 text - sm text - gray - 400">;
                        <span className="flex items - center gap - 1">;
                          <BookOpen className="w - 4 h - 4" />;
                          {article.category}
      {/* Support Hours & Contact */}
      <section className="py - 20 bg - gradient - to - r from - gray - 900 / 50 to - black">;
        <div className="container mx - auto px - 4">;
          <div className="grid lg:grid - cols - 2 gap - 12 items - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_x: -20 }}
              whileInView={{ opacity: 1, coordinate_x: 0 }}
              transition={{ duration: 0.8 }}
      {/* Contact CTA */}
      <section className="py - 20 bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20">;
        <div className="container mx - auto px - 4 text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
        {/* Contact Support */}
        <section id="contact - support" className="py - 20 px - 4 bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
