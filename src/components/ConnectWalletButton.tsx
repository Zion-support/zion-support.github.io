import React from 'react';

interface ConnectWalletButtonProps {
  onConnect?: () => void;
  className?: string;
}

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({ 
  onConnect, 
  className = "" 
}) => {
  return (
    <button
      onClick={onConnect}
      className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ${className}`}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWalletButton;