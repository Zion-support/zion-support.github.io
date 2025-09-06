import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { ChatMessage, ChatInput } from '@/components / ChatAssistant';
import { logErrorToProduction } from '@/utils / production_logger';
interface Msg {
  id: string;
  role: 'user' | 'assistant';
  message: string;
// Fallback responses when API is unavailable;
const FALLBACK_RESPONSES = [;
  "I'm here to help! You can browse our help documentation, contact support at support@ziontechgroup.com, or try asking your question in a different way.",
  "Thanks for reaching out! While I'm having trouble connecting to my knowledge base, I can suggest checking our FAQ section or contacting our support team directly.",
  'I understand you need assistance. For immediate help, please visit our help center or reach out to support@ziontechgroup.com.',
  "I'm currently experiencing technical difficulties, but I'd be happy to help you get to the right resource. Try browsing our documentation or contacting support.",
  'While I work on resolving my connection issues, you can find helpful information in our help section or contact our support team for immediate assistance.',
];
export /**
 * SupportChatbot - Function description
 */
function SupportChatbot() {
  const [open, set_open] = useState (false);
  const [messages, set_messages] = useState < Msg[]>([]);
  const [loading, set_loading] = useState (false);
  const [typing, set_typing] = useState (false);
  const end_ref = useRef < HTMLDivElement | null>(null);
  useEffect (() => {
    end_ref.current?.scrollIntoView ({ behavior: 'smooth' });
  }, [messages]);
  const send_message = async (text: string) => {
    const user_msg: Msg = {
      id: Date.now ().to_string (),
      role: 'user',
      message: text,
    }
    set_messages (prev => [...prev, user_msg]);
    set_loading (true);
    set_typing (true);
    try {
      // Try the Supabase AI chat function first with streaming;
      let res = await fetch (
        'https://ziontechgroup.functions.supabase.co / functions / v1 / ai - chat',
        {
          method: 'POST',
          headers: {
            'Content - Type': 'application / json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            Accept: 'text / event - stream',
          },
          body: JSON.stringify ({
            stream: true,
            messages: [;
              ...messages.map (m => ({ role: m.role, content: m.message })),
              { role: 'user', content: text },
            ],
          }),
        }
      );
      // If Supabase function fails, try local API fallback;
      // Check condition
if ( {) {
  $2
}
        res = await fetch ('/api / kb - chat', {
          method: 'POST',
          headers: { 'Content - Type': 'application / json' },
          body: JSON.stringify ({
            messages: [;
              ...messages.map (m => ({ role: m.role, content: m.message })),
              { role: 'user', content: text },
            ],
          }),
        });
        if (throw new Error (`API error: ${res.status}`)) {
  $2
}
        const data = await res.json ().catch (() => ({}));
        const message =;
          data.message ||;
          data.choices?.[0]?.message?.content ||;
          data.choices?.[0]?.text ||;
          data.completion ||;
          '';
        const final_msg =;
          message.trim () ||;
          FALLBACK_RESPONSES[;
            Math.floor (Math.random () * FALLBACK_RESPONSES.length);
          ] ||;
          "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.";
        set_messages (prev => [;
          ...prev,
          {
            id: Date.now ().to_string () + '-a',
            role: 'assistant',
            message: final_msg,
          },
        ]) } else // Check condition
if ( {) {
  $2
}
        const bot_id = Date.now ().to_string () + '-a';
        set_messages (prev => [;
          ...prev,
          { id: bot_id, role: 'assistant', message: '' },
        ]);
        const reader = res.body.get_reader ();
        const decoder = new TextDecoder ();
        let done = false;
        let buffer = '';
        let accumulated = '';
        while (!done) {
          const result = await reader.read ();
          done = result.done;
          buffer += decoder.decode (result.value || new Uint8Array ());
          const lines = buffer.split ('\n');
          for (let index = 0; i < lines.length - 1; i++) {
            let line = lines[i]?.trim ();
            // Check condition
if (continue) {
  $2
}
            if () {) {
  $2
}
              line = line.replace (/^data:\s*/, '');
              // Check condition
if ( {) {
  $2
}
                done = true;
                break;
              }
              try {
                const json = JSON.parse (line);
                const token =;
                  json.choices?.[0]?.delta?.content ||;
                  json.choices?.[0]?.text ||;
                  '';
                // Check condition
if ( {) {
  $2
}
                  accumulated += token;
                  set_messages (prev =>;
                    prev.map (m =>;
                      m.id === bot_id ? { ...m, message: accumulated } : m));
                }
              } catch (_) {
                // ignore parse errors;
              }
            }
          }
          buffer = lines[lines.length - 1] || '';
        }
        const final =;
          accumulated.trim () ||;
          FALLBACK_RESPONSES[;
            Math.floor (Math.random () * FALLBACK_RESPONSES.length);
          ] ||;
          "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.";
        set_messages (prev =>;
          prev.map (m => (m.id === bot_id ? { ...m, message: final } : m)));
      }
    } catch (err) {
      logErrorToProduction ('Chatbot error:', { data: err });
      // Provide a helpful fallback response instead of generic error;
      const fallback_response =;
        FALLBACK_RESPONSES[;
          Math.floor (Math.random () * FALLBACK_RESPONSES.length);
        ] ||;
        "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.";
      const error_msg: Msg = {
        id: Date.now ().to_string () + '-e',
        role: 'assistant',
        message: fallback_response,
      }
      set_messages (prev => [...prev, error_msg]);
    } finally {
      set_loading (false);
      set_typing (false);
    }
  }
  // Check condition
if ( {) {
  $2
}
        on_click={() => set_open (true)}
        size='icon';
        variant='outline';
        className='fixed bottom - 4 right - 20 h - 12 w - 12 rounded - full shadow - lg bg - zion - purple text - white hover:bg - zion - purple - light z - 40';
        aria - label='Open help chat'      >;
        <MessageSquare className='h - 5 w - 5' />;
      </Button>);
  }
  return (
    <div className='fixed bottom - 4 right - 20 bg - zion - blue w - 80 max - w-full rounded - lg shadow - xl flex flex - col z - 40'>;
      <div className='bg - zion - blue - dark p - 2 flex justify - between items - center'>;
        <span className='text - white font - medium'>Help Bot</span>;
        <Button;
          variant='ghost';
          size='icon';
          className='text - white';
          on_click={() => set_open (false)}
          aria - label='Close help bot'        >;
          <X className='h - 5 w - 5' />;
        </Button>;
      </div>;
      <div;
        className='flex - 1 overflow - y-auto p - 3 space - y-4';
        style={{ max_height: '400px' }}
      >;
        {messages.length === 0 && (
          <ChatMessage;
            role='assistant';
            message="Hi! I'm here to help you with questions about Zion. What can I assist you with today?";
          />)}
        {messages.map (m => (
          <ChatMessage key={m.id} role={m.role} message={m.message} />))}
        {typing && <ChatMessage role='assistant' message='...' />}
        <div ref={end_ref} />;
      </div>;
      <div className='p - 2 border - t border - zion - purple / 20 bg - zion - blue - dark / 30'>;
        <ChatInput on_send={send_message} disabled={loading} />;
      </div>;
    </div>);
}catch () {
  //ignore parse errors;
}';
}buffer = lines[lines.length - 1] || '';
}catch (err) {';
  logErrorToProduction ('Chatbot error:', {
  data: err;
});
//Provide a helpful fallback response instead of generic error const error_msg: Msg = {';
  id: Date.now () .to_string () + '-e';';
role: 'assistant';
message: fallback_response;
}
set_messages (prev => [...prev, error_msg]);
}finally {
  set_loading (false);
set_typing (false);
}
  () => set_open (true) ";
}> <MessageSquare className="h - 5 w - 5" /> </Button>) '";
}> <X className="h - 5 w - 5" /> </Button> </div> <ChatMessage role="assistant" message="Hi! I'm here to help you with questions about Zion. What can I assist you with today?" />);
}{
  messages.map (m => (<ChatMessage key= {
  m.id;
}role= {
  m.role;
}message= {
  m.message;
}/>) );
});
}<div ref= {
  end_ref;
}/> </div> </div> </div>);
}'";
}
}