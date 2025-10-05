importReact{ useState } from "react";

exportdefaultfunction EnhancedContactForm(): React.JSX.Element { 
  const [namesetName] = useState("");
  const [emailsetEmail] = useState("");
  const [messagesetMessage] = useState("");

  return (
    <formaria-label = "Contactform" onSubmit = { (e) = > e.preventDefault()  }className = "gridgap-4max-w-xlmx-auto">
      <inputaria-label="Name" 
        placeholder="Name" 
        value = { name }onChange={  (e) = > setName(e.target.value)  } className = "borderp-2rounded" 
      />
      <inputaria-label="Email" 
        placeholder="Email" 
        value = { email }onChange={  (e) = > setEmail(e.target.value)  } className = "borderp-2rounded" 
      />
      <textareaaria-label="Message" 
        placeholder="Message" 
        value = { message }onChange={  (e) = > setMessage(e.target.value)  } className = "borderp-2rounded" 
      />
    </form>
  );
}