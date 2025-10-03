import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Rocket, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const October2025EnterpriseTransformationRoadmapBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-left"
    >
      {/* Animated background effect */}
      <div className="text-left">
        <div className="text-left" />
      </div>

      <div className="text-left">
        {/* Header */}
        <div className="text-left">
          <motion.div
            animate={{ 
              y: [0, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-left"
          >
            <Rocket className="text-left" />
          </motion.div>
          <div>
            <div className="text-left">
              <BookOpen className="text-left" />
              <span>OCTOBER 1, 2025 - COMPREHENSIVE GUIDE<
            </div>
            <h2 className="text-left">
              Enterprise AI Transformation Roadmap 2025
            </h2>
          </div>
        </div>

        {/* Content */}
        <p className="text-left">
          Your complete blueprint for enterprise AI transformation. Based on 
          <span className="text-left"> 500+ successful implementations< at 
          Fortune 500 companies, this comprehensive guide delivers 
          <span className="text-left"> 400-800% ROI< and proven frameworks 
          for every phase of your AI journey.
        </p>

        {/* Implementation Phases */}
        <div className="text-left">
          <h3 className="text-left">
            <MapPin className="text-left" />
            4-Phase Implementation Framework
          </h3>
          <div className="text-left">
            {[
              { phase: "Foundation", duration: "1-3 months", investment: "$5M-$15M" },
              { phase: "Pilots", duration: "4-9 months", investment: "$10M-$30M" },
              { phase: "Scale", duration: "10-18 months", investment: "$30M-$100M" },
              { phase: "Transform", duration: "19-36 months", investment: "$100M-$500M" },
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-left"
              >
                <div className="text-left">
                  <div className="text-left">
                    {index + 1}
                  </div>
                  <span className="text-left">{phase.phase}<
                </div>
                <div className="text-left">{phase.duration}</div>
                <div className="text-left">{phase.investment}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="text-left">
          <div>
            <h3 className="text-left">What You'll Learn</h3>
            <div className="text-left">
              {[
                "Strategic assessment frameworks
                "Cloud-native AI architecture
                "MLOps platform setup
                "Governance & compliance
                "ROI measurement models"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-left"
                >
                  <CheckCircle className="text-left" />
                  <span>{item}<
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-left">Proven Results</h3>
            <div className="text-left">
              {[
                { metric: "Average ROI", value: "400-800%" },
                { metric: "Payback Period", value: "6-12 months" },
                { metric: "Cost Reduction", value: "40-70%" },
                { metric: "Revenue Increase", value: "15-35%" }
              ].map((result, index) => (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-left"
                >
                  <span className="text-left">{result.metric}<
                  <span className="text-left">{result.value}<
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="text-left">
          {[
            { company: "Fortune 100 Retailer", result: "$2.8B saved, 840% ROI" },
            { company: "Global Bank", result: "$1.4B cost reduction" },
            { company: "Healthcare System", result: "$847M savings, 15% better outcomes" }
          ].map((story, index) => (
            <motion.div
              key={story.company}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-left"
            >
              <div className="text-left">{story.company}</div>
              <div className="text-left">{story.result}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-left">
          <motion.a
            href="/guides/enterprise-ai-transformation-roadmap-2025"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-left"
          >
            Download Complete Guide
            <ArrowRight className="text-left" />
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-left"
          >
            Schedule Consultation
            <ArrowRight className="text-left" />
          </motion.a>
        </div>

        {/* Status Badge */}
        <div className="text-left">
          <span className="text-left">
            <span className="text-left"><
            <span className="text-left"><
          <
          COMPREHENSIVE GUIDE - 500+ IMPLEMENTATIONS
        </div>
      </div>
    </motion.div>
  );
};

export default October2025EnterpriseTransformationRoadmapBanner;
