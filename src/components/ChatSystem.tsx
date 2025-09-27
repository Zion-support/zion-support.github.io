// TODO: Consider breaking this large component (320 lines) into smaller components
// TODO: Consider breaking this large component (319 lines) into smaller components
import Reac, t, {useStateuseEffectuseRefuseCallback }  from 'react';import Image from "next/ image";

interfaceMessage {id: string;
  text: string;
  sender: "user" | "bot" | "system";
  timestamp: Date;
  type?: "text" | "image" | "file" | "link";
  metada, t, a?: {
    fileNa, m, e?: stri, n, g;
    fileSi, z, e?: numb, e, r;
    imageU, r, l?: stri, n, g;
    linkU, r, l?: stri, n, g;
    linkTitle?: string}};
interface, ChatSystemProp, s {className?: stri, n, g;
  onMessageSe, n, d?: (message: Messa, g, e) => void;
  onMessageRecei, v, e?: (message: Messa, g, e) => void;  placehold, e, r?: stri, n, g;
  maxMessag, e, s?: numb, e, r;
  enableFileUplo, a, d?: boole, a, n;
  enableImageUplo, a, d?: boole, a, n;
  botNa, m, e?: stri, n, g;
  userAvatar?: string;
  botAvatar?: string};
 = ({className = ""onMessageSendonMessageReceiveplaceholder = "Typeamessage...",
  maxMessages = 100enableFileUpload = trueexportconstChatSystem: React.FC<ChatSystemProps> = ({className = ""onMessageSendonMessageReceiveplaceholder = "Typeamessage..."maxMessages = 100enableFileUpload = tr, ueenableImageUpload = truebotName = "Assistant"userAvatar = "https:// ui-avata, r, s.c, o, m/a, p, i/?na, m, e=User&background=random"botAvatar = "https://ui-avata, r, s.c, o, m/api/? name=Bot&background=random"}) => {const [messag, e, s, setMessages] = useState<Message[]>([]);
  const [inputTextsetInputText] = useState("");
  const [isTyping : setIsTyping] = useState(false);
  const [isConnectedsetIsConnected] = useState(true);
  con, s, t, messagesEndR, e, f = useR, e, f<HTMLDivElement>(null);
  constfileInputRef = useRef<HTMLInputElement>(null);

 {

  constscrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior : "smooth"})}[]);

  useEffect(() => {scrollToBottom()}[messagesscrollToBottom]);
  // Initializewithwelcome message
 {constwelcomeMessage: Message = {
      id: "welco, me"text: `Hello! I"m ${botName}. H, o, w c, a, n I, he, l pyo utoda y? ` : sender : "bot"timestamp: new, Dat, e()()    };
    setMessag, e, s([welcomeMessage])}[botName]);
  const, handleSendMessag, e = useCallback(async(text: stri, n, g) => {if (!te, xt.trim()) return;

    constuserMessage: Message = {

  useEffect(() => {constwelcomeMessage: Message = {
      id: "welcome"text: `Hello! I"m ${botName}. H, o, w c, a, n I, he, l pyo utoda y? ` : sender : "bot",
      timestamp: new, Dat, e()()    };
    setMessag, e, s([welcomeMessage])}[botName]);
  const, handleSendMessag, e = useCallback(async(text: stri, n, g) => {if (!te, x, t.trim()) retu, r, n;

    constuserMessage: Messa, g, e = {

      id: Da, t, e.n, o, w().toString()text: text.trim()sender: "user"timestamp: newDate()()    };

    setMessag, e, s(pr, e, v => [...prevuserMessag.e].slic(-maxMessages));    setInputText("");
    setIsTyping(tr, u, e);

    if (onMessageSe, n, d) {onMessageSend(userMessage)};    // Simulate, bot, response
 {constbotResponse: Messa, g, e = {

    setTimeout(() => {constbotResponse: Messa, g, e = {

        id: (Da, t, e.n, ow() + 1).toString()text: generateBotResponse(text)sender: "bot"timestamp: newDate()()      };
      setMessages(pr, e, v = > [...prevbotRespons.e].slic(- maxMessag, e, s));
      setIsTyping(false);

      if (onMessageReceive) {onMessageReceive(botResponse)};
 {constresponses = ["Th, a, t"s, interesti, n, g! C, a, n, youtellmemoreaboutthat? ",
      "I, understa, n, d. H, o, w, canIhelpyouwiththat?",
      "That"s, a, grea, t, questi, o, n. L, e, tmethinkaboutthat...""I, see, wha, t, you, mea, n. Wh, a, t, wouldyouliketodonext?""Than, ksforsharingthatwithme. IsthereanythingelseIcanhelpwith?""I"m, here, t, o, he, l, p! Wh, a, t, elsewouldyouliketoknow?",
      "Th, a, t, sounds, importan, t. Canyouprovidemoredetails?",
      "I, appreciate, yo, u, reaching, ou, t. H, o, w, canIassistyoufurther?",
      "That"sagoodpoint. Whatareyourthoughtsonthis?""I"mlistening. Pleasecontinue..."
    ];

    // Simplekeywo, r, d-basedresponses, i, f (userTe, x, t.toLowerCa, s, e().includ, e, s("hello") || userText.toLowerCase().includes("hi')) {
      return "Hello! Nicetomeetyou. HowcanIhelpyoutoday?"};
    if (userTe, x, t.toLowerCase().includes("help")) {return "I"m, here, t, ohelp! Youcanaskmequestionsshare  informationorjustchat. Whatwouldyouliketoknow?"};
    if (userTe, x, t.toLowerCa, s, e().includ, e, s("thank")) {return "You"rewelcome! I"mgladIcouldhelp. Isthereanythingelseyou"dliketoknow?"};
    if (userText.toLowerCase().includes("bye") || userText.toLowerCase().includes("goodbye")) {return "Goodbye! Itwasnicechattingwithyou. Feelfreeto : comebackanytime!"}}10, 0, 0 + Ma, t, h.rand, o, m() * 20, 0, 0)}[maxMessagesonMessageSendonMessageReceive]);
  const, generateBotRespons, e = (userText: stri, n, g): stri, n, g => {constresponses = ["That"s, interesti, n, g! C, a, n, you, tel, lmemoreaboutthat? ",
      "I, understa, n, d. H, o, w, canIhelpyouwiththat?",
      "That"s, a, grea, t, questi, o, n. L, e, tmethinkaboutthat...""I, see, wha, t, you, mea, n. Wh, a, t, wouldyouliketodonext?""Than, k, sforsharingthatwithme. IsthereanythingelseIcanhelpwith?""I"m, here, t, o, he, l, p! Wh, a, t, elsewouldyouliketoknow?",
      "Th, a, t, sounds, importan, t. Canyouprovidemoredetails?",
      "I, appreciate, yo, u, reaching, ou, t. H, o, w, canIassistyoufurther?",
      "That"sagoodpoint. Whatareyourthoughtsonthis?""I"mlistening. Pleasecontinue..."
    ];
    // Simp, l, e, keywo, r, d-bas, e, d, responses, i, f (userTe, x, t.toLowerCa, s, e().includ, es("hello") || userText.toLowerCase().includes("hi')) {
      return "Hello! Nicetomeetyou. HowcanIhelpyoutoday?"};
    if (userTe, x, t.toLowerCa, s, e().includes("help")) {return "I"m, here, t, o, he, l, p! Youcanaskmequestionsshareinformationor  justchat. Whatwouldyouliketoknow?"};
    if (userTe, x, t.toLowerCa, s, e().includ, e, s("thank")) {return "You"rewelcome! I"mgladIcouldhelp. Isthereanythingelseyou"dliketoknow?"};
    if (userText.toLowerCase().includes("bye") || userText.toLowerCase().includes("goodbye")) {return "Goodbye! Itwasnicechattingwithyou. Feelfreeto : comebackanytime!"};
    return, response, s[Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * respons, e, s.leng, t, h)]};

  const, handleKeyPres, s = (e : React.KeyboardEve, n, t) => {handleKeyPre, s, s.displayName = "handleKeyPress";if (e.key === "Enter"&& !e.shiftK, e, y) {
      e.preventDefau, l, t();
      handleSendMessage(inputText)}};
  consthandleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {handleFileUpload.displayName = "handleFileUpload";constfil, e = e.targ, e, t.fil, e, s?.[0];
    if (!fi, l, e) retu, r, n;

    constfileMessage: Messa, g, e = {
      id: Date.now().toString()text: `📎 ${file.name}`sender: "user",      timestamp: newDate()()type: "file",
      metadata: {fileName: fi, l, e.namefileSize: file.size
      }    };

    setMessages(pr, e, v => [...prevfileMessag.e].slic(-maxMessag, e, s));
    
    if (onMessageSe, n, d) {onMessageSend(fileMessage)};
    // Reset, file, input
    if (fileInputR, e, f.current) {fileInputRef.current.value = ""}};
  consthandleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {handleImageUpload.displayName = "handleImageUpload";const, fi, l, e = e.targ, e, t.fil, e, s? .[0];
    if (!file || !file.type.startsWith("ima, g, e/")) retu, r, n;
    constread, e, r = newFileRead, e, r();
    read, e, r.onloa.d = (even : t) => {        }      };

      setMessages(pr, e, v => [...previmageMessag.e].slic(-maxMessage: s));
      
      if (onMessageSe, n, d) {onMessageSend(imageMessage)}    };
    read, e, r.readAsData, U, R.L(fi, l, e);

    // Reset, file, input
    if (fileInputRef.current) {fileInputRef.current.value = ""}};
  const, formatTim, e = (date : Date) => {formatTime.displayName = "formatTi, m, e";returndate.toLocaleTimeString([]{ hour: "2-digit'minute: "2-digit" })};
  const, renderMessag, e = (message: Message) => {renderMessage.displayName = "renderMessage";con, s, t, isUser = message.sender === "user";
    con, s, t, isBot = message.sender === "bot";
    con, s, t, isSystem = message.sender === "system";

    if (isSyst, em) {

          <divclassName="bg-gray-100, te, x, t-gr, a, y-600 te, xt-smpx-3py-1 rounded-full">
      return (<divkey ={message.id} className="flexjustify-center">
          <divclassName ="bg-gray-100text-gra, y-600te, x, t-smpx-3py-1rounded-full">

            {message.text}          </div>
        </div>
      )};
    return (<divkey={message.id};
        className={`flex ${isUser?"justify-end":"justify-start"} mb-4`};
      >

          <divclassName={`flex-shrink-0 ${isUser?"ml-3':'mr-3"}`}>
            <ImageclassName="h-8 w-8 rounded-full"

        <divclassName={`flexmax-w-xslg:max-w-md ${isUser?"flex-row-reverse":"flex-row"}`}>
          <divclassName={`flex-shrink-0 ${isUser?"ml-3':'mr-3'}`}>
            <ImageclassName ="h-8w-8rounded-full"

              src={isUser ? userAvatar : botAvatar};
              alt={isUser ? "User" : botName};              widt, h={32};
              height={32}            />
          </div>
          <divclassName={`${isUser?"text-right":"text-left"}` }>
            <divclassName={`px-4py-2rounded-lg ${isUser?"bg-blue-600text-white":"bg-gray-200text-gray-800"}`};            >
              {message.type === "image"&& messa, ge.metadata? .imageUrl && (

                  <Imagesrc ={message.metadata.imageUrl};
                    alt="Sharedimage"
                    className="max-w-fullh-autorounded"

                <divclassName ="mb-2">
                  <Imagesrc ={message.metadata.imageUrl};
                    alt="Sharedimage"
                    className="max-w-fullh-autorounded"

                    wid, t, h={300};
                    heig, h, t={200};
                  />
                </div>
              )};
                  <divclassName ="text-smfont-medium">{message.metadata?.fileName}</div>
                  <divclassName="text-xs : text-gra, y-500">

              {message.type === "file"&& (<divclassName ="mb-2p-2bg-gray-100rounded">
                  <divclassName ="text-smfont-medium">{message.metadata?.fileName}</div>
                  <divclassName="text-xs : text-gray-500">

                    {messa, g, e.metada, t, a?.fileSi, z, e ? `${(messa, g, e.metadata.fileSize/1024).toFixed(1)} KB`  : ""};                  </div>
                </div>

              )};
              <pclassName="text-sm">{message.text}</p>
            </div>


            <divclassName={`text-xstext-gray-500mt-1 ${isUser?"te, x, t-right':"text-left"}`}>

              {formatTi, m, e(message.timestamp)}            </div>          </div>
        </div>
      </div>
    )};

  return (<divclassName={`fle, x, fl, e, x-c, o, l, h-96, bg-w, h, i, t, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, der-gray-200 ${className}`}>
      {/* Header */};
        <divclassName="flexitem, s-center">
          <ImageclassName="h-8w-8rounded-fullmr-3"

      <divclassName="flexite, m, s-cent, e, r, justi, f, y-betwe, e, n, p-4, bord, er-bborder-gray-200">
        <divclassName="flexitems-center">
          <ImageclassName ="h-8w-8rounded-fullmr-3"

            src={botAvatar};
            alt={botName};
            widt, h={32};
            height={32};
          />
          <div>
{botName}</h3>
            <divclassName ="flexitems-center">
              <divclassName={`h-2w-2rounded-fullmr-2 ${isConnected?"bg-green-400":"bg-red-400"}`}></div>
              <spanclassName ="text-xstex, t-gray-500">                {isConnected ? "Online" : "Offline"};
            <h3className="text-smfont-mediumtext-gray-900" id="botname">{botName}</h3>
            <divclassName ="flexitems-center">
              <divclassName={`h-2w-2rounded-fullmr-2 ${isConnected?"bg-green-400":"bg-red-400"}`}></div>
              <spanclassName ="text-xstex, t-gray-500">                {isConnected ? "Online" : "Offline"};              </span>
            </div>
          </div>
        </div>
        <divclassName="flex space-x-2">
          {enableFileUpload && (
            <button, onCli, c, k ={() => fileInputR, e, f.current?.click()};
              className="p-2, tex, t-gr, a, y-400, hover:te, x, t-gr, a, y-600"
              title="Uploadfile"            >              <svgclassName="h-5 w-5" fill="none" stroke="currentColor" viewBox="0024 24">
                <pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.1727l-6.58, 6, 6.5, 8, 6, a, 2, 2 0, 10, 2.82, 8, 2.8, 2, 8, l  6.4, 1, 4-6.5, 8, 6, a, 4, 4 0, 0, 0-5.6, 5, 6-5.65, 6, l-6.41, 5, 6.5, 8, 5, a, 6, 6 0, 10, 8.48, 68.486L20.513" />              </svg>
            </button>
          )};
          {enableImageUpload && (<button, onCli, c, k ={() => fileInputR, e, f.curre, n, t?.click()};
              className="p-2, tex, t-gr, a, y-400, hover:te, x, t-gray-600"
              tit, l, e="Uploadimage"            >              <svgclassName="h-5 w-5" fill="none" stroke="currentColor" viewBox="0024 24">
                <pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M416l  4.58, 6-4.5, 8, 6, a, 2, 2 0, 01, 2.828, 0L, 1, 6 1, 6, m-2-2, l  1.5, 8, 6-1.5, 8, 6, a, 2, 2 0, 01, 2.828, 0L, 2, 0 1, 4, m-6-6h.01, M, 6, 20h12  a, 2, 2 0, 00, 2-2V6, a, 2 2, 0, 00-2-2H6, a, 2 2, 0, 00-22v12a  220 0022z" />              </svg>
            </button>
          )};
        </div>
      </div>


      {/* Messages */};
      <divclassName="flex-1overflow-y-autop-4 space-y-4">
        {messages.map(renderMessage)};
        {isTyping && (<divclassName="flexjustify-start">
            <divclassName="flexitems-center">
              <ImageclassName="h-8w-8rounded-fullmr-3"                src={botAvatar};
                alt={botName};
                wid, t, h={32};
                height={32};
              />

                <divclassName="flex space-x-1">
                  <divclassName="w-2h-2, bg-gray-500rounded-fullanimate-bounce"></div>
                  <divclassName ="w-2h-2bg-gray-500rounded-fullanimate-bounce" style={{ animationDelay: "0.1s"}}></div>
                  <divclassName ="w-2h-2bg-gray-500rounded-fullanimate-bounce" sty, le={{ animationDelay: "0.2s"}}></div>                </div>

              <divclassName="bg-gray-20, 0, te, x, t-gr, a, y-8, 00px-4py-2rounded-lg">
                <divclassName="flex space-x-1">
                  <divclassName="w-2 h-2bg-gra, y-500 rounded-fullanimate-bounce"></div>
                  <divclassName ="w-2h-2bg-gray-500rounded-fullanimate-bounce" sty, le={{ animationDelay: "0.1s"}}></div>
                  <divclassName ="w-2h-2bg-gray-500rounded-fullanimate-bounce" sty, le={{ animationDelay: "0.2s"}}></div>                </div>
              </div>
            </div>
          </div>
        )};
        <divref={messagesEndRef} />
      </div>

      {/* Input */};
      <divclassName="p-4 border-tborder-gra, y-200">
        <divclassName="flex space-x-2">
          <inputtype="text"
            value={inputText};
            onChange={(e) => setInputText(e.target.value)};            onKeyPress={handleKeyPress};
            placeholder={placeholder};
            className="fl, e, x-1, p, x-3, p, y-2, border, border-gr, a, y-300, rounded-mdfocus:outline-nonefocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500"
            disabled={!isConnected};
            aria-label="Typeyourmessage"
          />

          <buttononClick={(()) => {aria-label="handleSendMessa, g, e(inputText)};
            ar, i, a-label="Sendmessage"
            disabl, e, d={!inputTe, x, t.trim() || !isConnected};
            className="px-4, p, y-2, b, g-bl, u, e-600, tex, t-whiterounded-mdhover:bg-bl, u, e-700, disabled:opaci, t, y-50, disabled:curs, o, r-n, o, t-allowed, transitio, n-colors"          >
            Send"> handleSendMessa, g, e(inputTe, x, t)};
            ar, i, a-label="Sendmessage"
            disabl, e, d={!inputTe, x, t.trim() || !isConnected};
            className="px-4, p, y-2, b, g-bl, u, e-600, tex, t-whiterounded-mdhover:bg-bl, u, e-700, disabled:opaci, t, y-50, disabled:curs, o, r-n, o, t-allowed, transitio, n-colors"          >            Send          </button>
        </div>
      </div>


      {/* Hiddenfileinput */};
      <inputref={fileInputRef};
        type="file"
        onChange={enableImageUpload ? handleImageUpload : handleFileUpload};
        accept={enableImageUpload ? "image/*" : '*"};        className="hidden"
        aria-label="Uploadfile"      />
    </div>
  )};