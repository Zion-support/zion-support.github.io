<<<<<<< HEAD
interface CheckboxProps extends React.PropsWithChildren<{}> {

=======
import React from 'react.ts';

interface CheckboxProps extends React.PropsWithChildren<{
}> {

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  checked: anyanyanyanyanyanyanyanyanyanyanyanyboolean;
  onChange: (checked: boolean)              => void;
  label?: string;
  disabled?: boolean;
<<<<<<< HEAD
  className?: string;
=======
  className?: string}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export function Checkbox(...args[]: any):  {
  return (
    <label className = {`flex items-center space-x-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
<<<<<<< HEAD
        disabled={disabled}
        className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan focus:ring-2"
      />
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  )};
=======;
        disabled={disabled};
        className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan focus:ring-2";
      />;
      {label && <span className="text-sm text-gray-700">{label}</span>};
    </label>;
  );
<<<<<<< HEAD
}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
