

          const result = await reader.read();
          done = result.done;
          buffer += decoder.decode(result.value || new Uint8Array());
          const lines = buffer.split('\n');


                }
              } catch (_) {
                // ignore parse errors
              }
            }
          }

          buffer = lines[lines.length - 1] |''
        }
        const final =
          accumulated.trim() |
        const final = null;
          accumulated.trim() ||


  if (!open) {
    return (
      <Button 
        onClick={() => setOpen(true)} 
        size="icon" 
        variant="outline" 
        className="fixed bottom-4 right-20 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover: bg-zion-purple-light z-40" 
        aria-label="Open help chat"
      >
        <MessageSquare className="h-5 w-5" />


  return (
    <div className="fixed bottom-4 right-20 bg-zion-blue w-80 max-w-full rounded-lg shadow-xl flex flex-col z-40">
      <div className="bg-zion-blue-dark p-2 flex justify-between items-center">
        <span className="text-white font-medium">Help Bot</span>
        <Button


          variant="ghost"
          size="icon"
          className="text-white"
          onClick={() => setOpen(false)}
          aria-label="Close help bot"
        >
          <X className="h-5 w-5" />



        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-4" style={{ maxHeight: '400px' }}>
        {messages.length === 0 && (
          <ChatMessage 
            role="assistant" 
            message="Hi! I'm here to help you with questions about Zion. What can I assist you with today?" 
          />


        )}
        {messages.map(m => (
          <ChatMessage key={m.id} role={m.role} message={m.message} />
        ))}

        {typing && <ChatMessage role='assistant' message='...' />}

        {typing && (
          <ChatMessage role="assistant" message="..." />
        )}
        <div ref={endRef} />
      </div>
      <div className="p-2 border-t border-zion-purple/20 bg-zion-blue-dark/30">
        <ChatInput onSend={sendMessage} disabled={loading} />
      </div>
    </div>
  )

}catch () {
  //ignore parse errors
}'
}buffer = lines[lines.length - 1] |''
}catch (err) {'
  logErrorToProduction ('Chatbot error:', {
  data: err
})
//Provide a helpful fallback response instead of generic error const errorMsg: Msg = {'
  id: Date.now () .toString () + '-e';'
role: 'assistant'
message: fallbackResponse
}
setMessages (prev => [...prev, errorMsg])
}finally {
  setLoading (false)
setTyping (false)
}
  () => setOpen (true) "
}> <MessageSquare className="h-5 w-5" /> </Button>) '"
}> <X className="h-5 w-5" /> </Button> </div> <ChatMessage role="assistant" message="Hi! I'm here to help you with questions about Zion. What can I assist you with today?" />)
}{
  messages.map (m => (<ChatMessage key= {
  m.id
}role= {
  m.role
}message= {
  m.message
}/>) )
})
}<div ref= {
  endRef
}/> </div> </div> </div>)
}'"
}

