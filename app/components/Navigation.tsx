import React from 'react';
import { Link } from 'react-router-dom';
import { Chevron Down, Phone, Mail, Menu, X, Brain, Cloud, Shield, Code, Bar Chart, Users, Zap, Database, Smartphone, Settings, Check Square, File Text, Message Circle, Link as LinkIcon, Mic, Eye } from 'lucide-react';

const Navigation: React.F C = () => {
  return (
    <n av class Name="b g-gray-900 text-white">
      <d iv class Name="m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <d iv class Name="f lex justify-between items-center py-4">
          <d iv class Name="f lex items-center">
            <L ink to="/" class Name="t ext-2xl font-bold">
              Zion Tech Group
            </L ink>
          </d iv>
          <d iv class Name="h idden md:block">
            <d iv class Name="m l-10 flex items-baseline space-x-4">
              <L ink
                to="/"
                class Name="t ext-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </L ink>
              <L ink
                to="/about"
                class Name="t ext-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </L ink>
              <L ink
                to="/contact"
                class Name="t ext-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </L ink>
            </d iv>
          </d iv>
        )}
      </d iv>
    </n av>
  );
};

export default Navigation;
