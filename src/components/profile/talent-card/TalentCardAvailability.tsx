  const getAvailabilityColor = null;
  return (
    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>
      <Clock className="h-3 w-3" />
      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  )
}
