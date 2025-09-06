      {email && (
        <div className="mb - 4 text - zion - slate - light">;
          <span className="block">Email: </span>;
          <a;
            href={`mailto:${email}`}
            {email}
          </a>;
        </div>;
      )}
            <Input
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e && e.target.value)}
              className="bg-zion-blue border-zion-blue-light text-white";
=======
            className="text - zion - cyan hover:underline truncate block";
          >;
            {email}
          </a>;
        </div>)}
      <form on_submit={handleSendMessage}>;
        <div className="space - y-4">;
          <div>;
            <Input;
              placeholder="Subject";
              value={subject}
              on_change={(e) => set_subject (e.target.value)}
              className="bg - zion - blue border - zion - blue - light text - white";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              required;
            />;
          </div>;
          <div>;
            className="w-full bg-zion-cyan hover:bg-zion-cyan/90"
            disabled={isSending}>;
            <Send className="mr-2 h-4 w-4" />;
            {isSending ? "Sending..." : "Send Message"}
=======
            <Textarea;
              placeholder={`Message to ${profile_name}...`}
              value={message}
              on_change={(e) => set_message (e.target.value)}
              className="bg - zion - blue border - zion - blue - light text - white min - h-[120px]";
              required;
            />;
          </div>;
          <Button;
            type="submit";
            className="w - full bg - zion - cyan hover:bg - zion - cyan / 90";
            disabled={is_sending}
          >;
            <Send className="mr - 2 h - 4 w - 4" />;
            {is_sending ? "Sending..." : "Send Message"}
          </Button>;
        </div>;
      </form>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
