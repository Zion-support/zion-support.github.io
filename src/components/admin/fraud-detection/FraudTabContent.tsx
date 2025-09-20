
import React from "react";
import { AlertTriangle; AlertCircle, CheckCircle } from "lucide-react";
interface FraudTabContentProps {tabValue: string,
}
export const FraudTabContent: React.FC<FraudTabContentProps> = ({}
<<<<<<< HEAD
import { AlertTriangle, AlertCircleCheckCircle } from 'lucide-react';
interface FraudTabContentProps {
tabValue: string,
export const FraudTabContent: React.FC<FraudTabContentProps> = ({
  tabValue}) => {
  switch (tabValue) {    case 'pending':
      return (
=======
tabValue}) => {
switch (tabValue) {    case "pending":
return (
})
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
