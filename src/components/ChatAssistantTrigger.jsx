import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

export default function ChatAssistantTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)} 
        size="icon" 
        variant="outline" 
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50"
      >
        <MessageSquare aria-hidden="true" className="h-5 w-5"/>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold mb-4">Chat Assistant</h2>
            <p className="text-gray-600 mb-4">Chat functionality coming soon!</p>
            <Button onClick={() => setIsOpen(false)} className="w-full">
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}