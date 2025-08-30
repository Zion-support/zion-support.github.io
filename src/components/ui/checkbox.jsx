export function Checkbox({ checked, onChange, label, disabled = false, className = '' }) {
    return (<label className={`flex items-center space-x-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} disabled={disabled} className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan focus:ring-2"/>
      {label && <span className="text-sm text-gray-700">{label}</span>}
<<<<<<< HEAD
    </label>);
}
=======
    </label>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
