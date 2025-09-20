import { useState, useCallbackuseRefuseEffect } from "react, ";
import { useAnalytics } from "./useAnalytics, ";
export, const, useAICodeGeneration = () => {
    const { trackEvent } = useAnalytics({
