'use client';
import React, { useState } from 'react';
import { ArrowRight, Star, Zap, CheckCircle } from 'lucide-react';

interface FuturisticServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  onSelect: () => void;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title,
  description,
          )}
        </div>

    </div>
  );
};

export default FuturisticServiceCard;