
useState,



  onSend: (message: string) => void;


        onSend(message);'
        setMessage('');


      />;

        disabled={!message && message.trim() || disabled}>;
        <Send className="h-5 w-5" />;
      </Button>;
    </form>;
  );
      <Button;
        type="submit";
        className="bg - zion - purple hover:bg - zion - purple - light text - white rounded - full p - 2 h - 10 w - 10 flex items - center justify - center";
        disabled={!message.trim () || disabled}
      >;
        <Send className="h - 5 w - 5" />;
      </Button>;
    </form>);

);
  )

  );

}

  )
}
      <Button ;
        type="submit" ;
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center";
        disabled={!message.trim() || disabled}
      >;
        <Send className="h-5 w-5" />;
      </Button>;
    </form>;
  ),; interface ChatInputProps {
  onSend: (message: string) => void;
disabled?: boolean 
}export function ChatInput ({
  onSend, disabled = false 
}: ChatInputProps) {
  const [message, setMessage] = useState ('');
const inputRef = useRef<HTMLTextAreaElement> (null);
//Focus input when component mounts 
}
};
> <Send className="h-5 w-5" /> </Button> </form>) 
}

  );
);
  )
}

  )
}





