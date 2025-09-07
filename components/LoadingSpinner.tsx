}


  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-slate-300 border-t-blue-600`} />
      {text && (
        <p className="mt-2 text-slate-400 text-sm">{text}</p>
      )}
    </div>
  )
}

export default LoadingSpinner
