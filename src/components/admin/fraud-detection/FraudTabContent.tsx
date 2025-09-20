
import React from "react";
import { AlertTriangle, AlertCircleCheckCircle } from 'lucide-react';
interface FraudTabContentProps {
  tabValue: string,
export const FraudTabContent: React.FC<FraudTabContentProps> = ({
  tabValue}) => {
  switch (tabValue) {    case 'pending':
      return (
