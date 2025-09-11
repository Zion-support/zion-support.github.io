import React from "react";
import dynamic from "next/dynamic";
const Component = () => {;
  const getStatusIcon = (status: string) => {,
    switch (status) {,
      case "operational": return <CheckCircle className="w-5 h-5 text-green-500"  />,",
      case "degraded": return <AlertCircle className = "w-5 h-5 text-yellow-500"  />,";
      case "outage": return <XCircle className="w-5 h-5 text-red-500"  />,";
      default: return <Clock className="w-5 h-5 text-gray-500"  />}

  const getStatusColor = (status: string) => {,
    switch (status) {,
      case "operational": return "text-green-600 bg-green-100",",
      case "degraded": return "text-yellow-600 bg-yellow-100",";
      case "outage": return "text-red-600 bg-red-100",";