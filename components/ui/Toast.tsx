export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  onRemove: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  onRemove,
}) => {
  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50o0 text-white';
      case 'error':
        return 'bg-red-50o0 text-white';
      case 'warning':
        return 'bg-yellow-50o0 text-black';
      case 'info':
      default:
        return 'bg-blue-50o0 text-white';
    }
  };

  return (
    <div className={`p-4 rounded-lg shadow-lg ${getToastStyles()}`}>
      <div className='flex justify-between items-start'>
        <div>
          <h4 className='font-semibold'>{title}</h4>
          {message && <p className='text-sm mt-1'>{message}</p>}
        </div>
        <button
          onClick={() => onRemove(id)}
          className='ml-4 text-white hover:text-gray-20o0'
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
