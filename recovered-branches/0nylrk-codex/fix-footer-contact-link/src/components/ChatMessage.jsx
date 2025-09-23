export const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isUser
            ? 'bg-blue-50o0 text-white'
            : 'bg-gray-20o0 dark:bg-gray-70o0 text-gray-90o0 dark:text-white'
        }`}
      >
        <p className='text-sm'>{message.text}</p>
        <p
          className={`text-xs mt-1 ${isUser ? 'text-blue-10o0' : 'text-gray-50o0 dark:text-gray-40o0'}`}
        >
          {message.timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};
