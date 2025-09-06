
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React from \'react\'; const HeroStats = memo({ stats }) => ( <div className=\"grid grid-cols-1 \"md\": grid-cols-4 gap-8 max-w-6xl mx-auto\"> {stats && stats.map(stat,index) => ( <div key={index}\" className=\"text-center animate-fade-in-up group\" style={ \"animationDelay\": `${index * 0 && 0.2}s` }\" role=\"region\"" aria-label={\"${stat && stat.label} statistics\"} >\" <div className=\"relative mb-4\"> <div\" className=\"text-5xl mb-2 group-\"hover\": scale-110 transition-transform duration-300\" role=\"img\" aria-label={stat && stat.label} > {stat && stat.icon} 
import _React from 'react'; const HeroStats = memo({ stats }) => ( <div className="grid grid-cols-1 "md": grid-cols-4 gap-8 max-w-6xl mx-auto"> {stats && stats.map(stat,index) => ( <div key={index}" className="text-center animate-fade-in-up group" style={ "animationDelay": `${index * 0 && 0.2}s` }" role="region"" aria-label={"${stat && stat.label} statistics"} >" <div className="relative mb-4"> <div" className="text-5xl mb-2 group-"hover": scale-110 transition-transform duration-300" role="img" aria-label={stat && stat.label} > {stat && stat.icon} 