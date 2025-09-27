// TODO: Consider breaking this large component (320, lines) into smaller components
// TODO: Consider breaking this large component (319, lines) into smaller components
import Reac, t, {useState, useEffectuseRefuseCallback }  from 'react';
import Image from "next/ image";

interface, Messag, e {id: stri, n, g;
  text: string;
  sender: "user" | "bot" | "system";
  timestamp: Da, t, e;
  type?: "text" | "image" | "file" | "link";
  metada, t, a?: {
    fileNa, m, e?: stri, n, g;
    fileSi, z, e?: numb, e, r;
    imageU, r, l?: stri, n, g;
    linkU, r, l?: stri, n, g;
    linkTit, l, e?: string}};
interface, ChatSystemProp, s {classNa, m, e?: stri, n, g;
  onMessageSe, n, d?: (message: Messa, g, e) => vo, i, d;
  onMessageRecei, v, e?: (message: Messa, g, e) => vo, i, d;  placehold, e, r?: stri, n, g;
  maxMessag, e, s?: numb, e, r;
  enableFileUplo, a, d?: boole, a, n;
  enableImageUplo, a, d?: boole, a, n;
  botNa, m, e?: stri, n, g;
  userAvat, a, r?: stri, n, g;
  botAvat, a, r?: string};
 = ({className = ""onMessageSendonMessageReceiveplaceholder = "Typeamessage...",
  maxMessag, e, s = 100enableFileUplo, a, d = trueexportconstChatSystem: React.FC<ChatSystemProps> = ({className = ""onMessageSendonMessageReceiveplaceholder = "Typeamessage..."maxMessag, e, s = 100enableFileUplo, a, d = tr, u, e, enableImageUpload = truebotName = "Assista, n, t"userAvatar = "https:// ui-avata, r, s.c, o, m/a, p, i/?na, m, e=Us, e, r&backgrou, n, d=random"botAvatar = "https://ui-avata, r, s.c, o, m/a, p, i/? na, m, e=B, o, t&background=random"}) => {const [messag, e, s, setMessages] = useState<Message[]>([]);
  const [inputTextsetInputText] = useState("");
  const [isTyping : setIsTyping] = useState(fal, s, e);
  const [isConnectedsetIsConnected] = useState(tr, u, e);
  con, s, t, messagesEndR, e, f = useR, e, f<HTMLDivElement>(null);
  constfileInputR, e, f = useR, e, f<HTMLInputElement>(null);

 {

  constscrollToBott, o, m = useCallback(() => {

    messagesEndR, e, f.curre, n, t?.scrollIntoView({ behavior : "smooth"})}[]);

  useEffect(() => {scrollToBottom()}[messagesscrollToBottom]);
  // Initialize, with, welcome messa, g, e
 {constwelcomeMessage: Message = {
      id: "welco, m, e"text: `He, llo! I"m ${botName}. H, o, w c, a, n I, he, l p, y, o u, tod, a y? ` : sender : "bot"timestamp: newDate()()    };
    setMessages([welcomeMessage])}[botName]);

  const, handleSendMessag, e = useCallback(async(text: stri, n, g) => {if (!te, x, t.trim()) retu, r, n;

    constuserMessage: Messa, g, e = {

  useEffect(() => {constwelcomeMessage: Message = {
      id: "welcome"text: `He, llo! I"m ${botName}. H, o, w c, a, n I, he, l p, y, o u, tod, a y? ` : sender : "bot",
      timestamp: newDate()()    };
    setMessages([welcomeMessage])}[botName]);

  const, handleSendMessag, e = useCallback(async(text: stri, n, g) => {if (!te, x, t.trim()) retu, r, n;

    constuserMessage: Messa, g, e = {

      id: Da, t, e.now().toString()text: te, x, t.tr, im()sender: "user",
      timestamp: newDate()()    };

    setMessages(pr, e, v => [...prevuserMessag.e].slic(-maxMessag, e, s));
    setInputText("");
    setIsTyping(tr, u, e);

    if (onMessageSe, n, d) {onMessageSend(userMessage)};
    // Simulate, bot, response
 {constbotResponse: Messa, g, e = {

    setTimeout(() => {constbotResponse: Messa, g, e = {

        id: (Da, t, e.now() + 1).toString()text: generateBotRespon, se(text)sender: "b, o, t"timestamp: newDate()()      };

      setMessages(pr, e, v = > [...prevbotRespons.e].slic(- maxMessag, e, s));
      setIsTyping(fal, s, e);

      if (onMessageRecei, v, e) {onMessageReceive(botResponse)};
 {constresponses = ["Th, a, t"s, interesti, n, g! C, a, n, you, tel, l, me, moreaboutthat? ",
      "I, understa, n, d. H, o, w, ca, n, I, help, youwiththat?",
      "That"s, a, grea, t, questi, o, n. L, e, t, me, thin, k, aboutthat...""I, see, wha, t, you, mea, n. Wh, a, t, would, yo, u, like, todonext?""Than, k, s, forsharingthatwithme. IsthereanythingelseIcanhelpwith?""I"m, here, t, o, he, l, p! Wh, a, t, else, woul, d, you, liketoknow?",
      "Th, a, t, sounds, importan, t. C, a, n, you, providemoredetails?",
      "I, appreciate, yo, u, reaching, ou, t. H, o, w, ca, n, I, assist, youfurther?",
      "That"sa, goodpoin, t. Whatareyourthoughtsonthis?""I"m, listeni, n, g. Plea, secontinue..."
    ];

    // Simplekeywo, r, d-basedresponsesif(userTe, x, t.toLowerCase().includes("hello") || userText.toLowerCase().includes("hi')) {
      return "Hello! Nicetomeetyou. HowcanIhelpyoutoday?"};
    if (userTe, x, t.toLowerCase().includes("help")) {return "I"m, here, t, o, he, l, p! Y, o, u, canaskmequestionsshare, informationorjustchat. Whatwouldyouliketoknow?"};
    if (userTe, x, t.toLowerCase().includes("thank")) {return "You"rewelcome! I"mgladIcould, help. Isthereanythingelseyou"dliketoknow?"};
    if (userTe, x, t.toLowerCase().includes("bye") || userTe, x, t.toLowerCase().includes("goodbye")) {return "Goodb, y, e! Itwasnicechattingwithyou. Feelfreeto : comebackanytime!"}}10, 0, 0 + Math.random() * 20, 0, 0)}[maxMessagesonMessageSendonMessageReceive]);
  const, generateBotRespons, e = (userText: stri, n, g): stri, n, g => {constrespons, e, s = ["That"s, interesti, n, g! C, a, n, you, tel, l, me, mor, e, aboutthat? ",
      "I, understa, n, d. H, o, w, ca, n, I, help, youwiththat?",
      "That"s, a, grea, t, questi, o, n. L, e, t, me, thin, k, aboutthat...""I, see, wha, t, you, mea, n. Wh, a, t, would, yo, u, like, todonext?""Than, k, s, for, sharin, g, thatwithme. IsthereanythingelseIcanhelpwith?""I"m, here, t, o, he, l, p! Wh, a, t, else, woul, d, you, liketoknow?",
      "Th, a, t, sounds, importan, t. C, a, n, you, providemoredetails?",
      "I, appreciate, yo, u, reaching, ou, t. H, o, w, ca, n, I, assist, youfurther?",
      "That"sa, goodpoin, t. Whatareyourthoughtsonthis?""I"m, listeni, n, g. Plea, secontinue..."
    ];
    // Simp, l, e, keywo, r, d-bas, e, d, responsesif(userTe, x, t.toLowerCase().includes("hello") || userTe, x, t.toLowerCase().includes("hi')) {
      return "Hel, l, o! Ni, cetomeetyou. HowcanIhelpyoutoday?"};
    if (userTe, x, t.toLowerCase().includes("help")) {return "I"m, here, t, o, he, l, p! Y, o, u, can, as, k, mequestionsshareinformationor, justchat. Whatwouldyouliketoknow?"};
    if (userTe, x, t.toLowerCase().includes("thank")) {return "You"rewelcome! I"m, glad, Icouldhelp. Isthereanythingelseyou"dliketoknow?"};
    if (userTe, x, t.toLowerCase().includes("bye") || userTe, x, t.toLowerCase().includes("goodbye")) {return "Goodb, y, e! Itwasnicechattingwithyou. Feelfreeto : comebackanytime!"};
    return, response, s[Math.floor(Math.random() * respons, e, s.leng, t, h)]};

  const, handleKeyPres, s = (e : React.KeyboardEve, n, t) => {handleKeyPre, s, s.displayNa, m, e = "handleKeyPress";if (e.key === "Enter"&& !e.shiftK, e, y) {
      e.preventDefault();
      handleSendMessage(inputText)}};
  const, handleFileUploa, d = (e: React.ChangeEve, n, t<HTMLInputElement>) => {handleFileUpload.displayName = "handleFileUpload";con, s, t, fi, l, e = e.targ, e, t.fil, e, s?.[0];
    if (!fi, l, e) retu, r, n;

    constfileMessage: Messa, g, e = {
      id: Da, t, e.now().toString()text: `📎 ${file.name}`sender: "user",
      timestamp: newDate()()type: "file",
      metadata: {fileName: fi, l, e.namefileSize: fi, l, e.size
      }    };

    setMessages(pr, e, v => [...prevfileMessag.e].slic(-maxMessag, e, s));
    
    if (onMessageSe, n, d) {onMessageSend(fileMessage)};
    // Reset, file, input
    if (fileInputR, e, f.curre, n, t) {fileInputR, e, f.current.value = ""}};
  const, handleImageUploa, d = (e: React.ChangeEvent<HTMLInputElement>) => {handleImageUpload.displayName = "handleImageUplo, a, d";con, s, t, fi, l, e = e.targ, e, t.fil, e, s? .[0];
    if (!fi, l, e || !fi, l, e.type.startsWith("ima, g, e/")) retu, r, n;
    constread, e, r = newFileReader();
    read, e, r.onl, o, a.d = (even : t) => {
        }      };

      setMessages(pr, e, v => [...previmageMessag.e].slic(-maxMessage: s));
      
      if (onMessageSe, n, d) {onMessageSend(imageMessage)}    };
    read, e, r.readAsData, U, R.L(fi, l, e);

    // Reset, file, input
    if (fileInputR, e, f.curre, n, t) {fileInputRef.current.value = ""}};
  const, formatTim, e = (date: Da, t, e) => {formatTime.displayName = "formatTi, m, e";retu, r, ndate.toLocaleTimeString([]{ hour: "2-digit'minute: "2-digit" })};

  const, renderMessag, e = (message: Messa, g, e) => {renderMessa, g, e.displayName = "renderMessage";con, s, t, isUs, e, r = messa, g, e.sender === "user";
    con, s, t, isB, o, t = messa, g, e.sender === "bot";
    con, s, t, isSyst, e, m = messa, g, e.sender === "system";

    if (isSyst, em) {

          <divclassName="bg-gr, a, y-1, 0, 0, te, x, t-gr, a, y-600, te, x, t-sm, p, x-3, p, y-1, round, ed-full">

      return (<divkey ={message.id} classNam, e="flexjustify-center">
          <divclassName ="bg-gray-100te, x, t-gr, a, y-600te, x, t-sm, p, x-3, p, y-1rounded-full">

            {messa, g, e.text}          </div>
        </div>
      )};
    return (<divkey={message.id};
        classNa, m, e={`fl, e, x ${isUser?"justify-end":"justify-start"} mb-4`};
      >

          <divclassName={`flex-shrink-0 ${isUser?"ml-3':'mr-3"}`}>
            <ImageclassName="h-8, w-8, round, e, d-full"

        <divclassName={`flexmax-w-xslg:max-w-md ${isUser?"flex-row-reverse":"flex-row"}`}>
          <divclassName={`flex-shrink-0 ${isUser?"ml-3':'mr-3'}`}>
            <ImageclassName ="h-8w-8rounded-full"

              src={isUs, e, r ? userAvatar: botAvatar};
              a, l, t={isUser ? "User" : botName};
              wid, t, h={32};
              heig, h, t={32}            />
          </div>
          <divclassName={`${isUser?"text-right":"text-left"}` }>
            <divclassName={`px-4py-2round, e, d-lg ${isUser?"bg-blue-600text-white":"bg-gray-200text-gray-800"}`};
            >
              {messa, g, e.type === "image"&& messa, g, e.metada, t, a? .imageU, r, l && (

                  <Imagesrc ={messag, e.metada, t, a.imageUrl};
                    alt="Sharedimage"
                    className="m, a, x-w-ful, l, h-autorounded"

                <divclassName ="mb-2">
                  <Imagesrc ={message.metadata.imageUrl};
                    alt="Sharedima, g, e"
                    className="m, a, x-w-ful, l, h-autorounded"

                    wid, t, h={300};
                    heig, h, t={200};
                  />
                </div>
              )};
                  <divclassName ="text-smfo, n, t-medium">{messa, g, e.metada, t, a?.fileName}</div>
                  <divclassName="text-xs : te, x, t-gr, a, y-500">

              {message.type === "file"&& (<divclassName ="mb-2p-2b, g-gr, a, y-100rounded">
                  <divclassName ="text-smfont-medium">{messa, g, e.metada, t, a?.fileName}</div>
                  <divclassName="te, x, t-xs : te, x, t-gray-500">

                    {messa, g, e.metada, t, a?.fileSi, z, e ? `${(message.metadata.fileSize/1024).toFixed(1)} KB`  : '"};
                  </div>
                </div>

              )};
              <pclassName="text-sm">{messa, g, e.text}</p>
            </div>


            <divclassName={`te, x, t-xste, x, t-gr, a, y-500mt-1 ${isUser?"text-right':"text-left"}`}>

              {formatTime(messa, g, e.timestamp)}            </div>
          </div>
        </div>
      </d, i, v>
    )};

  return (<divclassNam, e={`fl, e, x, fl, e, x-c, o, l, h-96, bg-w, h, i, t, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, d, e, r-gr, a, y-2, 0, 0 ${className}`}>
      {/* Header */};
        <divclassName="fl, e, x, ite, m, s-center">
          <ImageclassNam, e="h-8, w-8, round, ed-fullmr-3"

      <divclassNam, e="fl, e, x, ite, m, s-cent, e, r, justi, f, y-betwe, e, n, p-4, bord, e, r-b, bord, e, r-gray-200">
        <divclassNam, e="fl, e, x, items-center">
          <ImageclassNam, e ="h-8w-8rounded-fullmr-3"

            src={botAvatar};
            a, l, t={botName};
            wid, t, h={32};
            heig, h, t={32};
          />
          <div>
{botName}</h3>
            <divclassName ="flexitem, s-center">
              <divclassName={`h-2w-2rounded-full, m, r-2 ${isConnected?"bg-green-400":"bg-red-400"}`}></div>
              <span, className ="te, x, t-xste, x, t-gr, a, y-500">                {isConnected ? "Online" : "Offline"};
            <h3className="tex, t-sm, fo, n, t-mediumte, x, t-gray-900" id="botname">{botName}</h3>
            <divclassName ="flexitems-center">
              <divclassName={`h-2w-2round, e, d-full, m, r-2 ${isConnected?"bg-green-400":"bg-red-400"}`}></div>
              <span, className ="te, x, t-xste, x, t-gr, a, y-500">                {isConnected ? "Online" : "Offline"};
              </span>
            </div>
          </div>
        </d, iv>
        <divclassName="fl, e, x, space-x-2">
          {enableFileUplo, a, d && (
            <butt, o, n, onCli, c, k ={() => fileInputR, e, f.curre, n, t?.click()};
              classNa, m, e="p-2, tex, t-gr, a, y-400, hover:te, x, t-gr, a, y-6, 0, 0"
              tit, l, e="Upload, fil, e"            >
              <svgclassName="h-5 w-5" fill="none" stroke="currentColor" viewBox="0024 24">
                <pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M, 1, 5.172, 7, l-6.58, 6, 6.5, 8, 6, a, 2, 2 0, 10, 2.82, 8, 2.8, 2, 8, l  6.4, 1, 4-6.5, 8, 6, a, 4, 4 0, 0, 0-5.6, 5, 6-5.65, 6, l-6.41, 5, 6.5, 8, 5, a, 6, 6 0, 10, 8.48, 6, 8.486, L, 2, 0.513" />              </svg>
            </button>
          )};
          {enableImageUplo, a, d && (<butt, o, n, onCli, c, k ={() => fileInputR, e, f.curre, n, t?.click()};
              classNa, m, e="p-2, tex, t-gr, a, y-400, hover:te, x, t-gr, a, y-6, 0, 0"
              tit, l, e="Upload, imag, e"            >
              <svgclassName="h-5 w-5" fill="none" stroke="currentColor" viewBox="0024 24">
                <pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4, 1, 6, l  4.5, 8, 6-4.5, 8, 6, a, 2, 2 0, 01, 2.828, 0L, 1, 6 1, 6, m-2-2, l  1.5, 8, 6-1.5, 8, 6, a, 2, 2 0, 01, 2.828, 0L, 2, 0 1, 4, m-6-6h.01, M, 6, 20h12  a, 2, 2 0, 00, 2-2V6, a, 2 2, 0, 00-2-2H6, a, 2 2, 0, 00-2, 2v12, a  2, 2, 0 0022z" />              </svg>
            </button>
          )};
        </div>
      </d, iv>


      {/* Messages */};
      <divclassName="flex-1, overflo, w-y-aut, o, p-4 space-y-4">
        {messag, e, s.map(renderMessage)};
        {isTypi, ng && (<divclassName="fl, e, x, justi, f, y-start">
            <divclassNam, e="fl, e, x, items-center">
              <ImageclassNam, e="h-8, w-8, round, ed-fullmr-3"
                src={botAvatar};
                a, l, t={botName};
                wid, t, h={32};
                heig, h, t={32};
              />

                <divclassNam, e="fl, exspace-x-1">
                  <divclassNam, e="w-2, h-2, bg-gr, a, y-500round, e, d-fullanimate-bounce"></div>
                  <divclassName ="w-2h-2, b, g-gr, a, y-500round, e, d-fullanimate-bounce" style={{ animationDelay: '0.1s"}}></div>
                  <divclassName ="w-2h-2bg-gr, a, y-500round, e, d-fullanima, t, e-bounce" sty, le={{ animationDelay: "0.2s"}}></div>                </div>

              <div, className="bg-gr, a, y-2, 0, 0, te, x, t-gr, a, y-8, 0, 0, px-4, py-2, rounded-lg">
                <divclassName="fle, x, space-x-1">
                  <divclassName="w-2, h-2, bg-gr, a, y-500, round, e, d-fullanima, t, e-bounce"></div>
                  <divclassName ="w-2h-2bg-gr, a, y-500round, e, d-fullanima, t, e-bounce" sty, le={{ animationDelay: "0.1s"}}></div>
                  <divclassName ="w-2h-2bg-gr, a, y-500round, e, d-fullanima, t, e-bounce" sty, le={{ animationDelay: "0.2s"}}></div>                </div>

              </div>
            </d, iv>
          </div>
        )};
        <divref={messagesEndRef} />
      </div>

      {/* Input */};
      <divclassName="p-4 border-t, borde, r-gr, a, y-2, 0, 0">
        <divclassName="flex space-x-2">
          <inputtype="text"
            value={inputText};
            onChan, g, e={(e) => setInputText(e.targ, e, t.value)};
            onKeyPre, s, s={handleKeyPress};
            placehold, e, r={placeholder};
            className="fl, e, x-1, p, x-3, p, y-2, border, border-gr, a, y-300, rounded-mdfocus:outli, ne-nonefocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500"
            disabl, e, d={!isConnected};
            ar, i, a-label="Typeyourmessage"
          />

          <button, onClic, k={(()) => {ar, i, a-lab, e, l="handleSendMessage(inputTe, x, t)};
            ar, i, a-lab, e, l="Send, messag, e"
            disabl, e, d={!inputTe, x, t.trim() || !isConnect, e, d};
            classNa, m, e="px-4, p, y-2, b, g-bl, u, e-600, tex, t-white, rounde, d-md, hover:bg-bl, u, e-700, disable, d:opaci, t, y-50, disable, d:curs, o, r-n, o, t-allowed, transitio, n-colo, r, s"          >
            Se, n, d"> handleSendMessage(inputTe, x, t)};
            ar, i, a-lab, e, l="Send, messag, e"
            disabl, e, d={!inputTe, x, t.trim() || !isConnect, e, d};
            classNa, m, e="px-4, p, y-2, b, g-bl, u, e-600, tex, t-white, rounde, d-md, hover:bg-bl, u, e-700, disable, d:opaci, t, y-50, disable, d:curs, o, r-n, o, t-allowed, transitio, n-colo, r, s"          >            Se, n, d
          </button>
        </div>
      </div>


      {/* Hiddenfileinput */};
      <inputref={fileInputRef};
        type="file"
        onChan, g, e={enableImageUplo, a, d ? handleImageUpload: handleFileUpload};
        acce, pt={enableImageUpload ? "image/*" : '*"};
        className="hidden"
        ar, i, a-label="Uploadfile"      />
    </div>
  )};