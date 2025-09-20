<<<<<<< HEAD
import { useState } from 'react',
export default function Page() {
 from '@/utils/apiClient',
) ,
            if(!response.ok) {
"
            // // // // // // // // console.error("Error in AI chat:", error),
            return Promise.resolve(),
"
                throw new Error("Failed to get response from AI assistant")}
            return Promise.resolve()}
        catch(error) {
"
            // console.error("Error in AI chat:", error),
            return Promise.resolve()}
    },
    return (<>"
      <Button onClick={() => setIsOpen(true)} size="icon" variant="outline" className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50" >"
        <MessageSquare aria-hidden="true" className="h-5 w-5"/>
      </Button>

      {isOpen && (<ChatAssistant isOpen={isOpen} onClose={ () => setIsOpen(false) } recipient = {
=======
      
      {isOpen && (<ChatAssistant isOpen={isOpen} onClose={() => setIsOpen(false)} recipient = {

  {

                id: 'ai-assistant',
                name: 'AI Assistant',
                avatarUrl: 'https://placehold.co/64x64?text=AI',"
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
