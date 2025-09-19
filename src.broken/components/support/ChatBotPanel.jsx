      
      <div className = {
"
  cn("p-4 border-t","
  theme === "dark" ? "border-zion-blue-light" : "border-gray-200")

}>
        <form onSubmit={(e) => {

            e.preventDefault();
            handleSendMessage();
        
"
}} className="flex items-center gap-2">"
          <Input ref={inputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type your question..." className = {
"
  cn("flex-1","
  theme === "dark"
            ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple"
            : "bg-white border-gray-200")


}/>"
          <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()} className="bg-zion-cyan hover:bg-zion-cyan/80 text-white">"
            <Send className="h-4 w-4"/>
          </Button>
        </form>
      </div>
    </div>)}
'"`