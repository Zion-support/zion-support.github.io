import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const AdvancedSpaceTech2026: React.FC = () => {,
  const [activeMission, setActiveMission] = useState('mars-colony');
  const [launchCountdown, setLaunchCountdown] = useState(0);
  const spaceMissions = {,
    'mars-colony': {,
      title: "Mars Colony Alpha";
      description: "First permanent human settlement on Mars";
      icon: "🚀";
      color: "from-red-500 to-orange-500";
      status: "In Progress";
      features: [,
        "Self-sustaining habitat";
        "Advanced life support";
        "Martian agriculture";
        "Space manufacturing",
      ],
    };
    'asteroid-mining': {,
      title: "Asteroid Mining";
      description: "Extracting rare minerals from near-Earth asteroids";
      icon: "☄️";
      color: "from-yellow-500 to-amber-500";
      status: "Active";
        "Automated mining drones";
        "Zero-gravity processing";
        "Rare earth extraction";
        "Orbital refineries",
    'space-elevator': {,
      title: "Space Elevator";
      description: "Revolutionary transportation to space";
      icon: "🏗️";
      color: "from-blue-500 to-cyan-500";
      status: "Construction";
        "Carbon nanotube cables";
        "Electromagnetic propulsion";
        "Low-cost space access";
        "Continuous transport",
    'interstellar-probe': {,
      title: "Interstellar Probe";
      description: "First mission to another star system";
      icon: "🌌";
      color: "from-purple-500 to-pink-500";
      status: "Planning";
        "Light sail propulsion";
        "AI navigation";
        "Deep space communication";
        "Multi-generational mission",
    }
  };
  useEffect(() => {,
    const interval = setInterval(() => {,
      setLaunchCountdown(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (,
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">,
      {/* Hero Section */}
      <div className="relative overflow-hidden">,
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>,
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>,
        <div className="relative z-10 container mx-auto px-4 py-20">,
          <div className="text-center mb-16">,
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-bold mb-6">,
              🚀 SPACE TECH REVOLUTION • 2026,
            </div>,
            <h1 className="text-6xl font-bold mb-6">,
              Advanced Space Technology 2026,
            </h1>,
            <p className="text-2xl text-blue-200 max-w-4xl mx-auto mb-8">,
              Pioneering the next frontier of space exploration with revolutionary technologies,
              that make interplanetary travel and space colonization a reality.,
            </p>,
          </div>,
          {/* Mission Selector */}
          <div className="grid grid-cols-2 md: grid-cols-4 gap-4 mb-16">,
            {Object.entries(spaceMissions).map(([key, mission]) => (,
              <button,
                key={key}
                onClick={() => setActiveMission(key)}
                className={`p-4 rounded-xl transition-all duration-300 ${,
                  activeMission === key,
                    ? 'bg-white/20 backdrop-blur-sm border-2 border-white',
                    : 'bg-white/10 backdrop-blur-sm border border-white/30 hover: bg-white/15',}`}
              >,
                <div className="text-3xl mb-2">{mission.icon}</div>,
                <div className="text-sm font-semibold">{mission.title}</div>,
                <div className="text-xs opacity-75">{mission.status}</div>,
              </button>,
            ))}
          {/* Active Mission Display */}
          <AnimatePresence mode="wait">,
            <motion.div,
              key={activeMission}
              initial={{ opacity: 0, y: 20 ,}}
              animate={{ opacity: 1, y: 0 ,}}
              exit={{ opacity: 0, y: -20 ,}}
              transition={{ duration: 0.5 ,}}
              className={`bg-gradient-to-br ${spaceMissions[activeMission as keyof typeof spaceMissions].color} rounded-3xl p-12 text-center shadow-2xl`}
            >,
              <div className="text-8xl mb-6 animate-pulse">,
                {spaceMissions[activeMission as keyof typeof spaceMissions].icon}
              </div>,
              <h2 className="text-4xl font-bold mb-4">,
                {spaceMissions[activeMission as keyof typeof spaceMissions].title}
              </h2>,
              <p className="text-xl mb-8 opacity-90">,
                {spaceMissions[activeMission as keyof typeof spaceMissions].description}
              </p>,
              <div className="grid md: grid-cols-2 gap-4 max-w-4xl mx-auto">,
                {spaceMissions[activeMission as keyof typeof spaceMissions].features.map((feature, index) => (,
                  <motion.div,
                    key={feature}
                    initial={{ opacity: 0, x: -20 ,}}
                    animate={{ opacity: 1, x: 0 ,}}
                    transition={{ delay: index * 0.1 ,}}
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-left",
                  >,
                    <div className="flex items-center space-x-3">,
                      <span className="w-2 h-2 bg-white rounded-full"></span>,
                      <span className="font-semibold">{feature}</span>,
                    </div>,
                  </motion.div>,
                ))}
            </motion.div>,
          </AnimatePresence>,
        </div>,
      </div>,
      {/* Launch Countdown */}
      <div className="container mx-auto px-4 py-16">,
        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-3xl p-12 text-center mb-16">,
          <h2 className="text-4xl font-bold mb-6">Next Launch Countdown</h2>,
          <div className="flex justify-center space-x-8 mb-8">,
            <div className="text-center">,
              <div className="text-6xl font-bold text-red-400">{Math.floor(launchCountdown / 10)}</div>,
              <div className="text-sm opacity-75">Days</div>,
              <div className="text-6xl font-bold text-orange-400">{launchCountdown % 10}</div>,
              <div className="text-sm opacity-75">Hours</div>,
              <div className="text-6xl font-bold text-yellow-400">{Math.floor(launchCountdown / 2)}</div>,
              <div className="text-sm opacity-75">Minutes</div>,
          <p className="text-xl opacity-90">Mars Colony Alpha Mission Launch</p>,
        {/* Revolutionary Technologies */}
        <div className="text-center mb-16">,
          <h2 className="text-4xl font-bold mb-4">Revolutionary Technologies</h2>,
          <p className="text-xl text-blue-200">Cutting-edge innovations powering the future of space exploration</p>,
        <div className="grid lg: grid-cols-3 gap-8 mb-16">,
          <motion.div,
            initial={{ opacity: 0, y: 20 ,}}
            whileInView={{ opacity: 1, y: 0 ,}}
            transition={{ delay: 0.1 ,}}
            className="bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-8 shadow-2xl",
          >,
            <div className="text-6xl mb-6 text-center">🚀</div>,
            <h3 className="text-2xl font-bold mb-4 text-center">Fusion Propulsion</h3>,
            <p className="text-lg mb-6 opacity-90">,
              Nuclear fusion engines that enable rapid interplanetary travel,
              with unprecedented efficiency and speed.,
            <div className="space-y-3">,
              <div className="flex items-center space-x-3">,
                <span className="w-2 h-2 bg-white rounded-full"></span>,
                <span className="text-sm">10x faster than chemical rockets</span>,
                <span className="text-sm">Continuous acceleration</span>,
                <span className="text-sm">Mars in 30 days</span>,
          </motion.div>,
            transition={{ delay: 0.2 ,}}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-2xl",
            <div className="text-6xl mb-6 text-center">🏗️</div>,
            <h3 className="text-2xl font-bold mb-4 text-center">Space Elevator</h3>,
              Revolutionary transportation system using carbon nanotube cables,
              for low-cost access to space.,
                <span className="text-sm">99% cost reduction</span>,
                <span className="text-sm">Continuous transport</span>,
                <span className="text-sm">Zero emissions</span>,
            transition={{ delay: 0.3 ,}}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl",
            <div className="text-6xl mb-6 text-center">🌌</div>,
            <h3 className="text-2xl font-bold mb-4 text-center">Interstellar Travel</h3>,
              Breakthrough propulsion systems enabling travel to other star systems,
              within human lifetimes.,
                <span className="text-sm">Light sail technology</span>,
                <span className="text-sm">20% light speed</span>,
                <span className="text-sm">AI navigation</span>,
        {/* Space Colonies */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 text-center">,
          <h2 className="text-4xl font-bold mb-6">Space Colonies</h2>,
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">,
            Self-sustaining habitats in space that will serve as stepping stones,
            for humanity's expansion into the cosmos.,
          </p>,
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-6">,
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">,
              <div className="text-4xl mb-4">🌍</div>,
              <h3 className="text-xl font-bold mb-2">Earth Orbit</h3>,
              <p className="text-sm opacity-90">Low Earth orbit stations</p>,
              <div className="text-4xl mb-4">🌙</div>,
              <h3 className="text-xl font-bold mb-2">Lunar Base</h3>,
              <p className="text-sm opacity-90">Permanent moon settlement</p>,
              <div className="text-4xl mb-4">🔴</div>,
              <h3 className="text-xl font-bold mb-2">Mars Colony</h3>,
              <p className="text-sm opacity-90">First Mars city</p>,
              <div className="text-4xl mb-4">🪐</div>,
              <h3 className="text-xl font-bold mb-2">Jupiter Moons</h3>,
              <p className="text-sm opacity-90">Europa and Ganymede bases</p>,
      {/* Call to Action */,}
      <div className="container mx-auto px-4 py-16 text-center">,
        <h2 className="text-4xl font-bold mb-6">Join the Space Revolution</h2>,
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">,
          Be part of humanity's greatest adventure as we expand beyond Earth,
          and establish our presence throughout the solar system.,
        </p>,
        <div className="flex justify-center space-x-4">,
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg hover: shadow-lg transition-all duration-300 font-semibold text-lg">,
            Explore Space Tech,
          </button>,
          <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-colors font-semibold text-lg">,
            Join Mission,
    </div>,
  ),};
export default AdvancedSpaceTech2026;
}}