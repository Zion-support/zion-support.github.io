import toast from 'react-hot-toast';

const useToast: any = () => {}
  const successToast: any = (message: string) => {}
    toast.success(message);
  };

  const errorToast: any = (message: string) => {}
    toast.error(message);
  };

  return { successToast, errorToast };
};

export default useToast;
'
